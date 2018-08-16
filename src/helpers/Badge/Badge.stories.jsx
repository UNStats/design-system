import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
import Box from "../Box";
import OpenInNewTabAnchor from "../../components/OpenInNewTabAnchor";

storiesOf("helpers/Badge", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <Badge href="#">default color</Badge>
  ))
  .addWithPercyOptions("primary color", { skip: true }, () => (
    <Badge color="primary" href="#">
      primary color
    </Badge>
  ))
  .addWithPercyOptions("blue", { skip: true }, () => (
    <Badge color="blue" href="#">
      blue
    </Badge>
  ))
  .addWithPercyOptions("green", { skip: true }, () => (
    <Badge color="green" href="#">
      green
    </Badge>
  ))
  .addWithPercyOptions("red", { skip: true }, () => (
    <Badge color="red" href="#">
      red
    </Badge>
  ))
  .addWithPercyOptions("yellow", { skip: true }, () => (
    <Badge color="yellow" href="#">
      yellow
    </Badge>
  ))
  .addWithPercyOptions("gray", { skip: true }, () => (
    <Badge color="gray" href="#">
      gray
    </Badge>
  ))
  .addWithPercyOptions("black", { skip: true }, () => (
    <Badge color="black" href="#">
      gray
    </Badge>
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <Badge href="#" Anchor={OpenInNewTabAnchor}>
      custom anchor
    </Badge>
  ));
