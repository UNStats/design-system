import React from "react";
import { storiesOf } from "@storybook/react";
import A from "./A";
import Box from "../../helpers/Box";

storiesOf("markdown/A", module)
  .addDecorator(story => <Box m={3}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <A href="#">default color</A>
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <A href="#" color="green">
      custom color
    </A>
  ));
