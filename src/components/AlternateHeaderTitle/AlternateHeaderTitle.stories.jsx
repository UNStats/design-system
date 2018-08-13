import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateHeaderTitle from "./AlternateHeaderTitle";
import Box from "../../helpers/Box";

storiesOf("components/AlternateHeaderTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <AlternateHeaderTitle year={2018} />)
  .add("custom color", () => (
    <AlternateHeaderTitle color="green" year={2017} />
  ));
