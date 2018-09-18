import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "grid-styled";
import Link from "./Link";
import NewTabAnchor from "../NewTabAnchor";

storiesOf("Primitives/Link", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("everything default", () => (
    <Link href="#anchor">Link with everything default</Link>
  ))
  .add("custom color", () => (
    <Link color="green" href="#anchor">
      Link with custom color
    </Link>
  ))
  .add("custom anchor", () => (
    <Link Anchor={NewTabAnchor} href="#anchor">
      Link with custom anchor
    </Link>
  ));
