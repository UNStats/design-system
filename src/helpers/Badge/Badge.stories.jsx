import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
import Box from "../Box";
import OpenInNewTabAnchor from "../../components/OpenInNewTabAnchor";

storiesOf("helpers/Badge", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <Badge href="#">default color</Badge>)
  .add("primary color", () => (
    <Badge color="primary" href="#">
      primary color
    </Badge>
  ))
  .add("blue", () => (
    <Badge color="blue" href="#">
      blue
    </Badge>
  ))
  .add("green", () => (
    <Badge color="green" href="#">
      green
    </Badge>
  ))
  .add("red", () => (
    <Badge color="red" href="#">
      red
    </Badge>
  ))
  .add("yellow", () => (
    <Badge color="yellow" href="#">
      yellow
    </Badge>
  ))
  .add("gray", () => (
    <Badge color="gray" href="#">
      gray
    </Badge>
  ))
  .add("black", () => (
    <Badge color="black" href="#">
      gray
    </Badge>
  ))
  .add("custom anchor", () => (
    <Badge href="#" Anchor={OpenInNewTabAnchor}>
      custom anchor
    </Badge>
  ));
