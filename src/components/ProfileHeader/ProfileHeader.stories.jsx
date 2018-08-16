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
  .addWithPercyOptions("everything default", { skip: true }, () => {
    const { name, img } = profiles[0];
    return <ProfileHeader name={name} img={img} badges={badges} />;
  })
  .addWithPercyOptions("long name", { skip: true }, () => {
    const { name, img } = profiles[1];
    return <ProfileHeader name={name} img={img} badges={badges} />;
  })
  .addWithPercyOptions("custom color", { skip: true }, () => {
    const { name, img } = profiles[2];
    return (
      <ProfileHeader name={name} img={img} color="green" badges={badges} />
    );
  })
  .addWithPercyOptions("custom anchor", { skip: true }, () => {
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
  .addWithPercyOptions("no badges", { skip: true }, () => {
    const { name, img } = profiles[4];
    return <ProfileHeader name={name} img={img} />;
  });
