import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select } from "@storybook/addon-knobs";
import AlternateSiteTitle from "./AlternateSiteTitle";

storiesOf("Primitives/AlternateSiteTitle", module)
  .add("knobs", () => (
    <AlternateSiteTitle
      color={select(
        "color",
        {
          primary: "primary",
          blue: "blue",
          green: "green",
          red: "red",
          yellow: "yellow"
        },
        "red"
      )}
      year={number("year", 2018)}
      m={2}
    />
  ))
  .add("default color", () => <AlternateSiteTitle year={2018} m={2} />);
