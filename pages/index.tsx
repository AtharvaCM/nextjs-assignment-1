import React, { useState } from "react";
import type { GetStaticProps, NextPage } from "next";

import axios from "axios";
import { NextSeo } from "next-seo";

// custom hooks
import { useAxios } from "src/hooks/useAxios";

// custom components
import Layout from "@/components/layout";
import Button from "@/components/UI/button";
import Select from "@/components/UI/select";
import Spinner from "@/components/UI/spinner";
import Card from "@/components/UI/card";
import List from "@/components/UI/list";
import ListItem from "@/components/UI/listItem";

type HomePageProps = {
  data: { Make_ID: string | number; Make_Name: string }[];
};

const Home: NextPage<HomePageProps> = ({ data }) => {
  // states
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showModels, setShowModels] = useState<boolean>(false);

  // custom hooks
  const { callAPI, loaded, data: modelsData, error, setLoaded } = useAxios();

  // handlers
  const handleFetchModels = () => {
    // check if make is selected or not
    if (selectedOption === null) {
      alert("Select a make first");
      return;
    }
    setShowModels(true);
    setLoaded(false);
    // fetch all models for the selected make
    const url: string = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${selectedOption}?format=json`;
    callAPI(url);
  };

  if (error) {
    return <p>Some error occured while calling the API</p>;
  }

  return (
    <>
      <Layout>
        {/* SEO */}
        <NextSeo
          title="Assignment 1 | AtharvaCM"
          description="Application which lets users select a make from the dropdown and displays the models for that make"
          canonical="http://localhost:3000"
        />

        {/* Select Make */}
        <div id="selectMakeContainer" className="mx-[10%]">
          <div className="mx-auto mt-6 max-w-[1024px]">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-extrabold text-black" role="heading">
                Makes
              </h1>
            </div>
            <div className="flex flex-col md:flex-row">
              <Select
                placeholderText="Select a make"
                forId="makes"
                onSelect={setSelectedOption}
                className="mb-2 flex-1 md:mb-0"
              >
                {data &&
                  data.map((option) => (
                    <option
                      key={option.Make_ID}
                      value={option.Make_ID}
                      role={"option"}
                    >
                      {option.Make_Name}
                    </option>
                  ))}
              </Select>
              <Button
                variant="primary"
                onClick={handleFetchModels}
                className="md:ml-2"
              >
                Fetch Models
              </Button>
            </div>
          </div>
        </div>

        {/* Display Models for selected Make if showModels */}
        <div id="displayModelsContainer" className="mx-[10%]">
          <div className="mx-auto mt-8 max-w-[1024px]">
            {/* Show spinner until API response loaded */}
            {showModels && !loaded && (
              <div className="my-10 flex items-center justify-center">
                <Spinner />
              </div>
            )}
            {/* Display models */}
            {showModels && loaded && (
              <div className="my-8 flex w-full justify-center">
                <Card title={`${modelsData?.Results[0].Make_Name} Models`}>
                  <List>
                    <ListItem>
                      <div className="flex-shrink-0">
                        <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
                          Model Name
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
                          Model ID
                        </p>
                      </div>
                    </ListItem>
                    {modelsData?.Results?.map(
                      (model: {
                        Make_ID: string | number;
                        Make_Name: string;
                        Model_ID: number;
                        Model_Name: number;
                      }) => (
                        <ListItem key={model.Model_ID}>
                          <div className="flex-shrink-0">
                            <p
                              data-testid="model-name"
                              className="truncate text-sm font-medium text-gray-900 dark:text-white"
                            >
                              {model.Model_Name}
                            </p>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {model.Model_ID}
                            </p>
                          </div>
                        </ListItem>
                      )
                    )}
                  </List>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url: string =
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
  const response = await axios.get(url);
  const makesArray = response.data.Results;

  return {
    props: {
      data: makesArray,
    },
  };
};
