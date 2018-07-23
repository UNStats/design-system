import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import MarkdownAnchor from "../MarkdownAnchor";
import Box from "../Box";

storiesOf("MarkdownAnchor", module)
  .addDecorator(story => <Box m={3}>{story()}</Box>)
  .add("everything default", () => (
    <MarkdownAnchor href="#">Test Link</MarkdownAnchor>
  ))
  .add("custom color", () => (
    <MarkdownAnchor href="#" color="green">
      Test Link
    </MarkdownAnchor>
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <MarkdownAnchor
        href="#"
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
      >
        Test Link
      </MarkdownAnchor>
    </MemoryRouter>
    //
  ));
