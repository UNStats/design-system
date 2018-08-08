import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import BadgeList from "./BadgeList";
import Box from "../Box";

const badges = [
  { text: "Design Engineer", href: "#", color: "red" },
  { text: "Recruiter", href: "#", color: "green" },
  { text: "Teacher", href: "#", color: "yellow" },
  { text: "Environmental Specialist", href: "#" },
  { text: "Nuclear Power Engineer", href: "#", color: "red" },
  { text: "Cost Accountant", href: "#", color: "green" },
  { text: "VP Marketing", href: "#", color: "yellow" },
  { text: "Automation Specialist", href: "#" },
  { text: "Analog Circuit Design Manager", href: "#", color: "red" },
  { text: "Senior Cost Accountant", href: "#", color: "green" },
  { text: "Desktop Support Technician", href: "#", color: "yellow" },
  { text: "Web Developer", href: "#" },
  { text: "Technical Writer", href: "#", color: "red" },
  { text: "Database Administrator", href: "#", color: "green" },
  { text: "Systems Administrator", href: "#", color: "yellow" },
  { text: "Assistant Manager", href: "#" }
];

storiesOf("components/BadgeList", module)
  .addDecorator(story => <Box p={1}>{story()}</Box>)
  .add("default anchor", () => <BadgeList values={badges.slice(0, 4)} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <BadgeList
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        values={badges.slice(0, 4)}
      />
    </MemoryRouter>
  ))
  .add("many badges", () => <BadgeList values={badges} />);
