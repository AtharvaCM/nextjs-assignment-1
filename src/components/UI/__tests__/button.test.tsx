/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "../button";

describe("Button", () => {
  // test 1
  it("Renders a button with passed title", () => {
    render(<Button variant="primary">Click here</Button>);

    const button = screen.getByRole("button", {
      name: /Click here/i,
    });

    expect(button).toBeInTheDocument();
  });
  // test 2
  it("Renders a disabled button when disabled prop is true", () => {
    render(
      <Button variant="primary" disabled={true}>
        Click here
      </Button>
    );

    const button = screen.getByRole("button", {
      name: /Click here/i,
    });

    expect(button).toBeDisabled();
  });
  // test 3
  it("renders a button with passed onClick callback", () => {
    render(
      <Button variant="primary" onClick={() => {}}>
        Click here
      </Button>
    );

    const button = screen.getByRole("button", {
      name: /Click here/i,
    });

    expect(button.onclick).toBeTruthy();
  });
});
