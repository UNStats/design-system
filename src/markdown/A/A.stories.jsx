import React from "react";
import { storiesOf } from "@storybook/react";
import A from "./A";
import Box from "../../helpers/Box";

storiesOf("markdown/A", module)
  .addDecorator(story => <Box m={3}>{story()}</Box>)
  .add("default color", () => <A href="#">default color</A>)
  .add("custom color", () => (
    <A href="#" color="green">
      custom color
    </A>
  ));
