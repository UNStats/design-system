import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateTitle from "./AlternateTitle";
import Box from "../Box";

storiesOf("AlternateTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <AlternateTitle year={2018} />)
  .add("custom color", () => <AlternateTitle color="green" year={2017} />);