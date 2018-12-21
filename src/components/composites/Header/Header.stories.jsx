import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import Header from "./Header";
import AlternateSiteTitle from "../../primitives/AlternateSiteTitle";
import NewTabLink from "../../primitives/NewTabLink";

const links = [
  {
    href: "#",
    text: "About"
  },
  {
    href: "#",
    text: "Blog"
  },
  {
    href: "#",
    text: "Programme"
  }
];

storiesOf("Composites/Header", module)
  .add("knobs", () => (
    <Header
      color={select(
        "color",
        {
          primary: "primary",
          blue: "blue",
          green: "green",
          red: "red",
          yellow: "yellow"
        },
        "primary"
      )}
      links={links}
    />
  ))
  .add("default color", () => <Header links={links} />)
  .add("custom link", () => <Header link={NewTabLink} links={links} />)
  .add("custom title", () => (
    <Header
      links={links}
      title={color => <AlternateSiteTitle color={color} year={2018} />}
    />
  ));
