import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import profiles from "../profiles";

storiesOf("ProfileCard", module)
  .add("with jobtitle and organization", () => (
    <ProfileCard
      name={profiles[0].name}
      jobtitle={profiles[0].jobtitle}
      organization={profiles[0].organization}
      href="/?selectedKind=ProfileCard&selectedStory=with%20jobtitle%20and%20organization"
      img={profiles[0].img}
    />
  ))
  .add("no jobtitle", () => (
    <ProfileCard
      name={profiles[1].name}
      organization={profiles[1].organization}
      href="/?selectedKind=ProfileCard&selectedStory=no%20jobtitle"
      img={profiles[1].img}
    />
  ))
  .add("no organization", () => (
    <ProfileCard
      name={profiles[2].name}
      jobtitle={profiles[2].jobtitle}
      href="/?selectedKind=ProfileCard&selectedStory=no%20organization"
      img={profiles[2].img}
    />
  ))
  .add("colors", () => (
    <div>
      <ProfileCard
        name={profiles[3].name}
        jobtitle={profiles[3].jobtitle}
        organization={profiles[3].organization}
        href="/?selectedKind=ProfileCard&selectedStory=colors"
        img={profiles[3].img}
        color="primary"
        m={1}
      />
      <ProfileCard
        name={profiles[4].name}
        jobtitle={profiles[4].jobtitle}
        organization={profiles[4].organization}
        href="/?selectedKind=ProfileCard&selectedStory=colors"
        img={profiles[4].img}
        color="blue"
        m={1}
      />
      <ProfileCard
        name={profiles[5].name}
        jobtitle={profiles[5].jobtitle}
        organization={profiles[5].organization}
        href="/?selectedKind=ProfileCard&selectedStory=colors"
        img={profiles[5].img}
        color="green"
        m={1}
      />
      <ProfileCard
        name={profiles[6].name}
        jobtitle={profiles[6].jobtitle}
        organization={profiles[6].organization}
        href="/?selectedKind=ProfileCard&selectedStory=colors"
        img={profiles[6].img}
        color="red"
        m={1}
      />
      <ProfileCard
        name={profiles[7].name}
        jobtitle={profiles[7].jobtitle}
        organization={profiles[7].organization}
        href="/?selectedKind=ProfileCard&selectedStory=colors"
        img={profiles[7].img}
        color="yellow"
        m={1}
      />
    </div>
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <ProfileCard
        name={profiles[0].name}
        jobtitle={profiles[0].jobtitle}
        organization={profiles[0].organization}
        href="/?selectedKind=ProfileCard&selectedStory=custom%20render%20prop"
        img={profiles[0].img}
        render={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ));
