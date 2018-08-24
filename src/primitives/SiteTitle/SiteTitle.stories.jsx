import React from "react";
import { storiesOf } from "@storybook/react";
import SiteTitle from "./SiteTitle";

storiesOf("Primitives/SiteTitle", module)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <SiteTitle m={1} />
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <SiteTitle color="green" m={1} />
  ));
