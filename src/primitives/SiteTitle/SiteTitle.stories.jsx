import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "grid-styled";
import SiteTitle from "./SiteTitle";

storiesOf("Primitives/SiteTitle", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => <SiteTitle />)
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <SiteTitle color="green" />
  ));
