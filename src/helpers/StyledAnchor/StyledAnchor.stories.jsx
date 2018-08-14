import React from "react";
import { storiesOf } from "@storybook/react";
import StyledAnchor from "./StyledAnchor";
import OpenInNewDefaultAnchor from "../../components/OpenInNewTabAnchor";
import Box from "../Box";

storiesOf("helpers/StyledAnchor", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("everything default", () => (
    <StyledAnchor href="#">StyledAnchor with everything default</StyledAnchor>
  ))
  .add("custom color", () => (
    <StyledAnchor color="green" href="#">
      StyledAnchor with custom color
    </StyledAnchor>
  ))
  .add("custom anchor", () => (
    <StyledAnchor Anchor={OpenInNewDefaultAnchor} href="#">
      StyledAnchor with custom anchor
    </StyledAnchor>
  ));
