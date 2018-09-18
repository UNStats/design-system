import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import AlternateSiteTitle from "../../primitives/AlternateSiteTitle";
import NewTabAnchor from "../../primitives/NewTabAnchor";

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
  .add("everything default", () => <Header links={links} />)
  .add("custom color", () => <Header color="red" links={links} />)
  .add("custom anchor", () => <Header links={links} Anchor={NewTabAnchor} />)
  .add("custom title", () => (
    <Header
      links={links}
      title={color => <AlternateSiteTitle color={color} year={2018} />}
    />
  ));
