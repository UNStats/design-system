import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "grid-styled";
import StyledAnchor from "./StyledAnchor";
import NewTabAnchor from "../NewTabAnchor";

storiesOf("Primitives/StyledAnchor", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("everything default", { skip: true }, () => (
    <StyledAnchor href="#">StyledAnchor with everything default</StyledAnchor>
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <StyledAnchor color="green" href="#">
      StyledAnchor with custom color
    </StyledAnchor>
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <StyledAnchor Anchor={NewTabAnchor} href="#">
      StyledAnchor with custom anchor
    </StyledAnchor>
  ));
