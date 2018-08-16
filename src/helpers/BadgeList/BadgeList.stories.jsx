import React from "react";
import { storiesOf } from "@storybook/react";
import BadgeList from "./BadgeList";
import Box from "../Box";
import OpenInNewTabAnchor from "../../components/OpenInNewTabAnchor";

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

storiesOf("helpers/BadgeList", module)
  .addDecorator(story => <Box p={1}>{story()}</Box>)
  .addWithPercyOptions("default anchor", { skip: true }, () => (
    <BadgeList values={badges.slice(0, 4)} />
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <BadgeList Anchor={OpenInNewTabAnchor} values={badges.slice(0, 4)} />
  ))
  .addWithPercyOptions("many badges", { skip: true }, () => (
    <BadgeList values={badges} />
  ));
