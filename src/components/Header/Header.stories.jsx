import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import AlternateHeaderTitle from "../AlternateHeaderTitle";
import OpenInNewTabAnchor from "../OpenInNewTabAnchor";

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

storiesOf("components/Header", module)
  .add("everything default", () => <Header links={links} />)
  .addWithPercyOptions("custom color", { skip: true }, () => (
    <Header color="red" links={links} />
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <Header links={links} Anchor={OpenInNewTabAnchor} />
  ))
  .addWithPercyOptions("custom title", { skip: true }, () => (
    <Header
      links={links}
      title={color => <AlternateHeaderTitle color={color} year={2018} />}
    />
  ));
