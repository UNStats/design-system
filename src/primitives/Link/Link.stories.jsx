import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "grid-styled";
import Link from "./Link";
import NewTabAnchor from "../NewTabAnchor";

storiesOf("Primitives/Link", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .addWithPercyOptions("everything default", { skip: true }, () => (
    <Link href="#anchor">Link with everything default</Link>
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <Link color="green" href="#anchor">
      Link with custom color
    </Link>
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <Link Anchor={NewTabAnchor} href="#anchor">
      Link with custom anchor
    </Link>
  ));
