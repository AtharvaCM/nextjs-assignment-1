/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Select from "../select";

describe("Select", () => {
  it("Renders a select component with given placeholder option", () => {
    render(
      <Select
        placeholderText="Select something"
        forId="makes"
        onSelect={() => {}}
      />
    );

    const option = screen.getByRole("option", {
      name: /Select something/i,
    });

    expect(option).toBeInTheDocument();
  });
});
