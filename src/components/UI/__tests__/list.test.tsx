/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import List from "../list";

describe("List", () => {
  it("renders a unordered list", () => {
    render(<List />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
});
