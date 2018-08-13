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
  .add("custom color", () => <Header color="red" links={links} />)
  .add("custom anchor", () => (
    <Header links={links} Anchor={OpenInNewTabAnchor} />
  ))
  .add("custom title", () => (
    <Header
      links={links}
      title={color => <AlternateHeaderTitle color={color} year={2018} />}
    />
  ));
