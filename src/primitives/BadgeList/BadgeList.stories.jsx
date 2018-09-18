import React from "react";
import { storiesOf } from "@storybook/react";
import BadgeList from "./BadgeList";
import NewTabAnchor from "../NewTabAnchor";

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

storiesOf("Primitives/BadgeList", module)
  .add("default anchor", () => <BadgeList values={badges.slice(0, 4)} m={2} />)
  .add("custom anchor", () => (
    <BadgeList Anchor={NewTabAnchor} values={badges.slice(0, 4)} m={2} />
  ))
  .add("many badges", () => <BadgeList values={badges} m={2} />);
