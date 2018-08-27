import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileHeader from "./ProfileHeader";
import profiles from "../../profiles";
import NewTabAnchor from "../../primitives/NewTabAnchor";

const badges = [
  { text: "Committee Member", color: "red", href: "#" },
  { text: "Keynote Speaker", color: "yellow", href: "#" }
];

storiesOf("Composites/ProfileHeader", module)
  .addWithPercyOptions("everything default", { skip: true }, () => {
    const { name, img } = profiles[0];
    return <ProfileHeader name={name} img={img} badges={badges} m={2} />;
  })
  .addWithPercyOptions("long name", { skip: true }, () => {
    const { name, img } = profiles[1];
    return <ProfileHeader name={name} img={img} badges={badges} m={2} />;
  })
  .addWithPercyOptions("custom color", { skip: true }, () => {
    const { name, img } = profiles[2];
    return (
      <ProfileHeader
        name={name}
        img={img}
        color="green"
        badges={badges}
        m={2}
      />
    );
  })
  .addWithPercyOptions("custom anchor", { skip: true }, () => {
    const { name, img } = profiles[3];
    return (
      <ProfileHeader
        Anchor={NewTabAnchor}
        name={name}
        img={img}
        badges={badges}
        m={2}
      />
    );
  })
  .addWithPercyOptions("no badges", { skip: true }, () => {
    const { name, img } = profiles[4];
    return <ProfileHeader name={name} img={img} m={2} />;
  });
