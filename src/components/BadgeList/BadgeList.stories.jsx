import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import BadgeList from "./BadgeList";
import Box from "../Box";

const badges = [
  { text: "Committee Member", href: "#", color: "red" },
  { text: "Organizer", href: "#", color: "green" },
  { text: "Keynote Speaker", href: "#", color: "yellow" },
  { text: "Speaker", href: "#" }
];

storiesOf("components/BadgeList", module)
  .addDecorator(story => <Box p={1}>{story()}</Box>)
  .add("default anchor", () => <BadgeList values={badges} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <BadgeList
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        values={badges}
      />
    </MemoryRouter>
  ))
  .add("many badges", () => (
    <BadgeList
      values={[...badges, ...badges, ...badges, ...badges, ...badges]}
    />
  ));
