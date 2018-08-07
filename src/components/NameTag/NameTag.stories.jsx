import React from "react";
import { storiesOf } from "@storybook/react";
import NameTag from "./NameTag";
import Box from "../Box";
import profiles from "../../profiles";

storiesOf("components/NameTag", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => (
    <NameTag name={profiles[0].name} img={profiles[0].img} />
  ))
  .add("custom color", () => (
    <NameTag name={profiles[1].name} img={profiles[1].img} color="red" />
  ));
