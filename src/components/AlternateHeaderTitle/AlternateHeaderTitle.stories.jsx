import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateHeaderTitle from "./AlternateHeaderTitle";
import Box from "../../helpers/Box";

storiesOf("components/AlternateHeaderTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <AlternateHeaderTitle year={2018} />
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <AlternateHeaderTitle color="green" year={2017} />
  ));
