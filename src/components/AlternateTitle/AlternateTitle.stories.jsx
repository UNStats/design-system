import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateTitle from "./AlternateTitle";
import Box from "../../helpers/Box";

storiesOf("components/AlternateTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <AlternateTitle year={2018} />)
  .add("custom color", () => <AlternateTitle color="green" year={2017} />);
