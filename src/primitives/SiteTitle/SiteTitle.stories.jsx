import React from "react";
import { storiesOf } from "@storybook/react";
import SiteTitle from "./SiteTitle";

storiesOf("Primitives/SiteTitle", module)
  .add("default color", () => <SiteTitle m={1} />)
  .add("custom color", () => <SiteTitle color="green" m={1} />);
