import React from "react";
import { storiesOf } from "@storybook/react";
import DefaultTitle from "./DefaultTitle";
import Box from "../Box";

storiesOf("components/DefaultTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <DefaultTitle />)
  .add("custom color", () => <DefaultTitle color="green" />);
