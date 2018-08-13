import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePreview from "./ProfilePreview";
import rawProfiles from "../../profiles";

const profiles = rawProfiles.map(({ href, ...profile }) => ({ ...profile }));

storiesOf("components/ProfilePreview", module)
  .add("with jobtitle and organization", () => (
    <ProfilePreview {...profiles[0]} />
  ))
  .add("really long strings", () => <ProfilePreview {...profiles[1]} />)
  .add("no jobtitle", () => {
    const { jobtitle, ...profile } = profiles[2];
    return <ProfilePreview {...profile} />;
  })
  .add("no organization", () => {
    const { organization, ...profile } = profiles[3];
    return <ProfilePreview {...profile} />;
  });
