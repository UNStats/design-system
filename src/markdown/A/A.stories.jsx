import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import A from "../A";
import Box from "../../components/Box";

storiesOf("markdown/A", module)
  .addDecorator(story => <Box m={3}>{story()}</Box>)
  .add("everything default", () => <A href="#">Test Link</A>)
  .add("custom color", () => (
    <A href="#" color="green">
      Test Link
    </A>
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <A
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        href="#"
      >
        Test Link
      </A>
    </MemoryRouter>
    //
  ));
