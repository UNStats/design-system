import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Header from "./Header";

storiesOf("Header", module)
  .add("default anchor", () => (
    <Header
      links={[
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
      ]}
    />
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <Header
        links={[
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
        ]}
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ));
