import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Header from "./Header";
import AlternateTitle from "../AlternateTitle";

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

storiesOf("Header", module)
  .add("everything default", () => <Header links={links} />)
  .add("custom color", () => <Header color="red" links={links} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <Header
        links={links}
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
      />
    </MemoryRouter>
  ))
  .add("custom title", () => (
    <Header
      links={links}
      title={color => <AlternateTitle color={color} year={2018} />}
    />
  ));
