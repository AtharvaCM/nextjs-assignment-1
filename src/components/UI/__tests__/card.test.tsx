/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Card from "../card";

describe("Card", () => {
  it("Renders a card with given title", () => {
    render(<Card title="Models" />);

    const card = screen.getByRole("heading", {
      name: "Models",
    });

    expect(card).toBeInTheDocument();
  });
});
