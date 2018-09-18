import React from "react";
import { storiesOf } from "@storybook/react";
import AlternateSiteTitle from "./AlternateSiteTitle";

storiesOf("Primitives/AlternateSiteTitle", module)
  .add("default color", () => <AlternateSiteTitle year={2018} m={1} />)
  .add("custom color", () => (
    <AlternateSiteTitle color="green" year={2017} m={1} />
  ));
