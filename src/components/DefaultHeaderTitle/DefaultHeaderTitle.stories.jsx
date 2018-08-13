import React from "react";
import { storiesOf } from "@storybook/react";
import DefaultHeaderTitle from "./DefaultHeaderTitle";
import Box from "../../helpers/Box";

storiesOf("components/DefaultHeaderTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <DefaultHeaderTitle />)
  .add("custom color", () => <DefaultHeaderTitle color="green" />);
