import React, { useEffect, useState } from "react";
import type { GetStaticProps, NextPage } from "next";

import axios from "axios";

// custom components
import Layout from "@/components/layout";
import Button from "@/components/UI/button";
import Select from "@/components/UI/select";
import Spinner from "@/components/UI/spinner";

// custom hooks
import { useAxios } from "src/hooks/useAxios";

type IndexPageProps = {
  data: { Make_ID: string | number; Make_Name: string }[];
};

const Home: NextPage<IndexPageProps> = ({ data }) => {
  // states
  const [selectedOption, setSelectedOption] = useState<number | null>(440);
  const [showModels, setShowModels] = useState<boolean>(false);

  // custom hooks
  const { callAPI, loaded, data: modelsData, error, setLoaded } = useAxios();

  // handlers
  const handleFetchModels = () => {
    // disable loading
    setLoaded(false);
    // fetch all models for the selected make
    const url: string = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${selectedOption}?format=json`;
    callAPI(url);
  };

  // side effects
  useEffect(() => {
    // when loading is finished, show the models
    if (loaded) {
      setShowModels(true);
    }
  }, [loaded]);

  if (error) {
    return <p>Some error occured while calling the API</p>;
  }

  return (
    <Layout>
      {/* Select Make */}
      <div
        id="selectMakeContainer"
        className="container flex flex-col items-center"
      >
        <h1 className="text-4xl font-extrabold text-black">Makes</h1>
        <div className="flex items-end">
          <Select
            placeholderText="Select a make"
            forId="makes"
            onSelect={setSelectedOption}
          >
            {data.map((option) => (
              <option key={option.Make_ID} value={option.Make_ID}>
                {option.Make_Name}
              </option>
            ))}
          </Select>
          <Button variant="primary" onClick={handleFetchModels}>
            Fetch Models
          </Button>
        </div>
      </div>

      {/* Display Models for selected Make if showModels */}
      {showModels && (
        <div id="displayModelsContainer" className="container">
          {/* Show spinner until API response loaded */}
          {!loaded && (
            <div className="my-10 flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {/* Display models */}
          {loaded && (
            <p>
              {modelsData?.Results?.map(
                (model: {
                  Make_ID: string | number;
                  Make_Name: string;
                  Model_ID: number;
                  Model_Name: number;
                }) => model.Model_Name
              )}
            </p>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url: string =
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
  const response = await axios.get(url);
  const makesArray = response.data.Results.slice(0, 25);

  return {
    props: {
      data: makesArray,
    },
  };
};
