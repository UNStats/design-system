import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import Badge from "./Badge";
import NewTabLink from "../NewTabLink";

storiesOf("Primitives/Badge", module)
  .addWithJSX("knobs", () => (
    <Badge
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
      href="#"
      m={2}
    >
      {text("text", "badge")}
    </Badge>
  ))
  .addWithJSX("default color", () => (
    <Badge href="#" m={2}>
      default color
    </Badge>
  ))
  .addWithJSX("custom link", () => (
    <Badge href="#" link={NewTabLink} m={2}>
      custom anchor
    </Badge>
  ));
