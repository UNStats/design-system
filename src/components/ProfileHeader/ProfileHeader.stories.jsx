import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileHeader from "./ProfileHeader";
import Box from "../Box";
import profiles from "../profiles";

storiesOf("ProfileHeader", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => (
    <ProfileHeader
      name={profiles[0].name}
      img={profiles[0].img}
      badges={[
        { text: "Committee Member", color: "red" },
        { text: "Keynote Speaker", color: "yellow" }
      ].map(badge => ({ ...badge, href: "" }))}
    />
  ))
  .add("custom color", () => (
    <ProfileHeader
      name={profiles[1].name}
      img={profiles[1].img}
      color="green"
      badges={[
        { text: "Committee Member", color: "red" },
        { text: "Keynote Speaker", color: "yellow" }
      ].map(badge => ({ ...badge, href: "" }))}
    />
  ))
  .add("no badges", () => (
    <ProfileHeader name={profiles[2].name} img={profiles[2].img} />
  ));
