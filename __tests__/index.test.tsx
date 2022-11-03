/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import axios from "axios";
const axios = require("axios");

import Home from "../pages/index";

const DUMMY_MAKES = [
  { Make_ID: 1, Make_Name: "BMW" },
  { Make_ID: 2, Make_Name: "Honda" },
];

const EXPECTED_RESULT = {
  Count: 242,
  Message: "Response returned successfully",
  SearchCriteria: "Make:bmw",
  Results: [
    {
      Make_ID: 452,
      Make_Name: "BMW",
      Model_ID: 1707,
      Model_Name: "128i",
    },
    {
      Make_ID: 452,
      Make_Name: "BMW",
      Model_ID: 1708,
      Model_Name: "135i",
    },
    {
      Make_ID: 452,
      Make_Name: "BMW",
      Model_ID: 1709,
      Model_Name: "328i",
    },
  ],
};

jest.mock("axios");
const mockedAxios = jest.mocked(axios, { shallow: true });

describe("Home", () => {
  // Test 1
  it("Renders a heading", () => {
    render(<Home data={DUMMY_MAKES} />);

    const heading: HTMLElement = screen.getByRole("heading", {
      name: "Makes",
    });

    expect(heading).toBeInTheDocument();
  });
  // Test 2
  it("Renders models for selected make", async () => {
    render(<Home data={DUMMY_MAKES} />);

    const user = userEvent.setup();

    const select: HTMLElement = screen.getByTestId("select");
    const option: HTMLOptionElement = screen.getByRole("option", {
      name: "BMW",
    });
    const option2: HTMLOptionElement = screen.getByRole("option", {
      name: "Honda",
    });
    const fetchModelsButton = screen.getByRole("button", {
      name: /Fetch Models/i,
    });

    // select BMW option
    await user.selectOptions(select, option);
    expect(option.selected).toBeTruthy();
    expect(option2.selected).toBeFalsy();

    axios.get.mockResolvedValue({ data: EXPECTED_RESULT });

    // Click fetch models button
    user.click(fetchModelsButton);

    // Call API
    const result = await axios.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsdormake/bmw?format=json"
    );

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.data).toBe(EXPECTED_RESULT);
  });
});
