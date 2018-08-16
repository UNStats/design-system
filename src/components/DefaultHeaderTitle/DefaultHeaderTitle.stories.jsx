import React from "react";
import { storiesOf } from "@storybook/react";
import DefaultHeaderTitle from "./DefaultHeaderTitle";
import Box from "../../helpers/Box";

storiesOf("components/DefaultHeaderTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <DefaultHeaderTitle />
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <DefaultHeaderTitle color="green" />
  ));
