import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePreview from "./ProfilePreview";
import rawProfiles from "../../profiles";

// Remove href from profiles.
const profiles = rawProfiles.map(({ href, ...profile }) => ({ ...profile }));

storiesOf("Composites/ProfilePreview", module)
  .addWithPercyOptions("with jobtitle and organization", { skip: true }, () => (
    <ProfilePreview {...profiles[0]} p={2} />
  ))
  .addWithPercyOptions("really long strings", { skip: true }, () => (
    <ProfilePreview {...profiles[1]} p={2} />
  ))
  .addWithPercyOptions("no jobtitle", { skip: true }, () => {
    const { jobtitle, ...profile } = profiles[2];
    return <ProfilePreview {...profile} p={2} />;
  })
  .addWithPercyOptions("no organization", { skip: true }, () => {
    const { organization, ...profile } = profiles[3];
    return <ProfilePreview {...profile} p={2} />;
  });
