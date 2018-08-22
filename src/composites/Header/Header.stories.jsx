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
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <Header color="red" links={links} />
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <Header links={links} Anchor={NewTabAnchor} />
  ))
  .addWithPercyOptions("custom title", { skip: true }, () => (
    <Header
      links={links}
      title={color => <AlternateSiteTitle color={color} year={2018} />}
    />
  ));
