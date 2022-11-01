/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import List from "../list";
import ListItem from "../listItem";

describe("List Item", () => {
  it("Renders a list item", () => {
    render(
      <List>
        <ListItem>li</ListItem>
      </List>
    );

    const listitem = screen.getByRole("listitem");

    expect(listitem).toBeInTheDocument();
  });
});
