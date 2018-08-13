import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileHeader from "./ProfileHeader";
import Box from "../../helpers/Box";
import profiles from "../../profiles";
import OpenInNewTabAnchor from "../OpenInNewTabAnchor";

const badges = [
  { text: "Committee Member", color: "red", href: "#" },
  { text: "Keynote Speaker", color: "yellow", href: "#" }
];

storiesOf("components/ProfileHeader", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("everything default", () => {
    const { name, img } = profiles[0];
    return <ProfileHeader name={name} img={img} badges={badges} />;
  })
  .add("long name", () => {
    const { name, img } = profiles[1];
    return <ProfileHeader name={name} img={img} badges={badges} />;
  })
  .add("custom color", () => {
    const { name, img } = profiles[2];
    return (
      <ProfileHeader name={name} img={img} color="green" badges={badges} />
    );
  })
  .add("custom anchor", () => {
    const { name, img } = profiles[3];
    return (
      <ProfileHeader
        Anchor={OpenInNewTabAnchor}
        name={name}
        img={img}
        badges={badges}
      />
    );
  })
  .add("no badges", () => {
    const { name, img } = profiles[4];
    return <ProfileHeader name={name} img={img} />;
  });
