import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";
import Badge from "./Badge";

storiesOf("Primitives/Badge", module)
  .add("knobs", () => (
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
  .add("default color", () => (
    <Badge href="#" m={2}>
      default color
    </Badge>
  ));
