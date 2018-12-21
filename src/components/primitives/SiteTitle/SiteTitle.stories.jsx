import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import SiteTitle from "./SiteTitle";

storiesOf("Primitives/SiteTitle", module)
  .add("knobs", () => (
    <SiteTitle
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
      m={2}
    />
  ))
  .add("default color", () => <SiteTitle m={2} />);
