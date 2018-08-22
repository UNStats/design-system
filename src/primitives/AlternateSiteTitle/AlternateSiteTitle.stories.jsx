import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "grid-styled";
import AlternateSiteTitle from "./AlternateSiteTitle";

storiesOf("Primitives/AlternateSiteTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <AlternateSiteTitle year={2018} />
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <AlternateSiteTitle color="green" year={2017} />
  ));
