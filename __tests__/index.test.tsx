/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

const DUMMY_MAKES = [
  { Make_ID: 1, Make_Name: "BMW" },
  { Make_ID: 2, Make_Name: "Honda" },
];

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home data={DUMMY_MAKES} />);

    const heading = screen.getByRole("heading", {
      name: "Makes",
    });

    expect(heading).toBeInTheDocument();
  });
});
