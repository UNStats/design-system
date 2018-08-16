import React from "react";
import { storiesOf } from "@storybook/react";
import StyledAnchor from "./StyledAnchor";
import OpenInNewDefaultAnchor from "../../components/OpenInNewTabAnchor";
import Box from "../Box";

storiesOf("helpers/StyledAnchor", module)
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
    <StyledAnchor Anchor={OpenInNewDefaultAnchor} href="#">
      StyledAnchor with custom anchor
    </StyledAnchor>
  ));
