import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "rebass";
import ProfilePreview from "./ProfilePreview";
import NewTabLink from "../../primitives/NewTabLink";
import rawProfiles from "../../../test/profiles";

// Remove href from profiles.
const profiles = rawProfiles.map(({ href, ...profile }) => ({ ...profile }));

const badges = [
  { text: "Committee Member", color: "red", href: "/committee" },
  { text: "Keynote Speaker", color: "yellow", href: "/keynotes" }
];

storiesOf("Composites/ProfilePreview", module)
  .add("complete profile", () => {
    const { name, jobtitle, organization, img } = profiles[0];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        affiliation={{
          jobtitle,
          organization
        }}
        badges={badges}
        m={2}
      />
    );
  })
  .add("align left", () => {
    const { name, jobtitle, organization, img } = profiles[1];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        affiliation={{
          jobtitle,
          organization
        }}
        badges={badges}
        align="left"
        m={2}
      />
    );
  })
  .add("align right", () => {
    const { name, jobtitle, organization, img } = profiles[2];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        affiliation={{
          jobtitle,
          organization
        }}
        badges={badges}
        align="right"
        m={2}
      />
    );
  })
  .add("avatar only", () => {
    const { name, img } = profiles[3];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={64}
            width={64}
            src={img}
          />
        )}
        m={2}
      />
    );
  })
  .add("avatar and name only", () => {
    const { name, img } = profiles[4];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        m={2}
      />
    );
  })
  .add("responsive image", () => {
    const { name, img } = profiles[5];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={[32, 64, 128]}
            width={[32, 64, 128]}
            src={img}
          />
        )}
        name={name}
        m={2}
      />
    );
  })
  .add("custom font size", () => {
    const { name, img } = profiles[6];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        fontSize={[5, 6]}
        m={2}
      />
    );
  })
  .add("custom link", () => {
    const { name, img } = profiles[7];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        badges={badges}
        link={NewTabLink}
        m={2}
      />
    );
  })
  .add("really long strings", () => {
    const { name, jobtitle, organization, img } = profiles[29];
    return (
      <ProfilePreview
        avatar={() => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        )}
        name={name}
        affiliation={{
          jobtitle,
          organization
        }}
        badges={badges}
        m={2}
      />
    );
  });
