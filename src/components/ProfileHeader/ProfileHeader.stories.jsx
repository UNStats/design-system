import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Box from "../Box";
import profiles from "../profiles";

const badges = [
  { text: "Committee Member", color: "red", href: "#" },
  { text: "Keynote Speaker", color: "yellow", href: "#" }
];

storiesOf("ProfileHeader", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("everything default", () => {
    const { name, img } = profiles[0];
    return <ProfileHeader name={name} img={img} badges={badges} />;
  })
  .add("custom color", () => {
    const { name, img } = profiles[1];
    return (
      <ProfileHeader name={name} img={img} color="green" badges={badges} />
    );
  })
  .add("custom anchor", () => {
    const { name, img } = profiles[2];
    return (
      <MemoryRouter>
        <ProfileHeader
          anchor={({ href, children }) => (
            <NavLink to={href}>{children}</NavLink>
          )}
          name={name}
          img={img}
          badges={badges}
        />
      </MemoryRouter>
    );
  })
  .add("no badges", () => {
    const { name, img } = profiles[3];
    return <ProfileHeader name={name} img={img} />;
  });
