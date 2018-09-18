import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
import NewTabAnchor from "../NewTabAnchor";

storiesOf("Primitives/Badge", module)
  .add("default color", () => (
    <Badge href="#" m={2}>
      default color
    </Badge>
  ))
  .add("primary color", () => (
    <Badge color="primary" href="#" m={2}>
      primary color
    </Badge>
  ))
  .add("blue", () => (
    <Badge color="blue" href="#" m={2}>
      blue
    </Badge>
  ))
  .add("green", () => (
    <Badge color="green" href="#" m={2}>
      green
    </Badge>
  ))
  .add("red", () => (
    <Badge color="red" href="#" m={2}>
      red
    </Badge>
  ))
  .add("yellow", () => (
    <Badge color="yellow" href="#" m={2}>
      yellow
    </Badge>
  ))
  .add("gray", () => (
    <Badge color="gray" href="#" m={2}>
      gray
    </Badge>
  ))
  .add("black", () => (
    <Badge color="black" href="#" m={2}>
      gray
    </Badge>
  ))
  .add("custom anchor", () => (
    <Badge href="#" Anchor={NewTabAnchor} m={2}>
      custom anchor
    </Badge>
  ));
