import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateSiteTitle from "./AlternateSiteTitle";

storiesOf("Primitives/AlternateSiteTitle", module)
  .addWithPercyOptions("default color", { skip: true }, () => (
    <AlternateSiteTitle year={2018} m={1} />
  ))
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <AlternateSiteTitle color="green" year={2017} m={1} />
  ));
