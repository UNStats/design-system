import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import SiteTitle from "./SiteTitle";

storiesOf("Primitives/SiteTitle", module)
  .addWithJSX("knobs", () => (
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
  .addWithJSX("default color", () => <SiteTitle m={2} />);
