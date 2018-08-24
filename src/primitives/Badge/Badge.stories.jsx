import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
import NewTabAnchor from "../NewTabAnchor";

storiesOf("Primitives/Badge", module)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <Badge href="#" m={2}>
      default color
    </Badge>
  ))
  .addWithPercyOptions("primary color", { skip: true }, () => (
    <Badge color="primary" href="#" m={2}>
      primary color
    </Badge>
  ))
  .addWithPercyOptions("blue", { skip: true }, () => (
    <Badge color="blue" href="#" m={2}>
      blue
    </Badge>
  ))
  .addWithPercyOptions("green", { skip: true }, () => (
    <Badge color="green" href="#" m={2}>
      green
    </Badge>
  ))
  .addWithPercyOptions("red", { skip: true }, () => (
    <Badge color="red" href="#" m={2}>
      red
    </Badge>
  ))
  .addWithPercyOptions("yellow", { skip: true }, () => (
    <Badge color="yellow" href="#" m={2}>
      yellow
    </Badge>
  ))
  .addWithPercyOptions("gray", { skip: true }, () => (
    <Badge color="gray" href="#" m={2}>
      gray
    </Badge>
  ))
  .addWithPercyOptions("black", { skip: true }, () => (
    <Badge color="black" href="#" m={2}>
      gray
    </Badge>
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <Badge href="#" Anchor={NewTabAnchor} m={2}>
      custom anchor
    </Badge>
  ));
