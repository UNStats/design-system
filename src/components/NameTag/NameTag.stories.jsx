import React from "react";
import { storiesOf } from "@storybook/react";
import NameTag from "./NameTag";
import profiles from "../profiles";

storiesOf("NameTag", module)
  .add("default color", () => (
    <NameTag name={profiles[0].name} img={profiles[0].img} p={1} />
  ))
  .add("custom color", () => (
    <NameTag name={profiles[1].name} img={profiles[1].img} color="red" p={1} />
  ));
