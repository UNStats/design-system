import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import BadgeList from "./BadgeList";

// Badges without href. href needs to be filled in by each story.
const badges = [
  { text: "Committee Member", color: "red" },
  { text: "Organizer", color: "green" },
  { text: "Keynote Speaker", color: "yellow" },
  { text: "Speaker" }
];

// Custom render prop.
const render = (href, text) => <NavLink to={href}>{text}</NavLink>;

storiesOf("BadgeList", module)
  .add("default render prop", () => (
    <BadgeList
      badges={badges.map(badge => ({
        ...badge,
        href: "/?selectedKind=BadgeList&selectedStory=default%20render%20prop"
      }))}
      p={1}
    />
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <BadgeList
        badges={badges.map(badge => ({
          ...badge,
          href: "/?selectedKind=BadgeList&selectedStory=custom%20render%20prop"
        }))}
        render={render}
        p={1}
      />
    </MemoryRouter>
  ))
  .add("many badges", () => (
    <BadgeList
      badges={[
        { text: "Badge 01" },
        { text: "Badge 02", color: "blue" },
        { text: "Badge 03", color: "red" },
        { text: "Badge 04", color: "green" },
        { text: "Badge 05", color: "yellow" },
        { text: "Badge 06", color: "gray" },
        { text: "Badge 07", color: "black" },
        { text: "Badge 08", color: "primary" },
        { text: "Badge 09", color: "blue" },
        { text: "Badge 10", color: "red" },
        { text: "Badge 11", color: "green" },
        { text: "Badge 12", color: "yellow" },
        { text: "Badge 13", color: "gray" },
        { text: "Badge 14", color: "black" },
        { text: "Badge 15" },
        { text: "Badge 16", color: "blue" },
        { text: "Badge 17", color: "red" },
        { text: "Badge 18", color: "green" },
        { text: "Badge 19", color: "yellow" },
        { text: "Badge 20", color: "gray" },
        { text: "Badge 21", color: "black" }
      ].map(badge => ({
        ...badge,
        href: "/?selectedKind=BadgeList&selectedStory=many%20badges"
      }))}
      p={1}
    />
  ));
