import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { display } from "styled-system";
import BadgeList from "../../primitives/BadgeList";
import ProfilePreview from "./ProfilePreview";
import rawProfiles from "../../profiles";

// Remove href from profiles.
const profiles = rawProfiles.map(({ href, ...profile }) => ({ ...profile }));

const Image = styled.img`
  ${display};
`;

const badges = () => (
  <BadgeList
    mt={[1, 2, 3]}
    mb={0}
    values={[
      { text: "Committee Member", color: "red", href: "#" },
      { text: "Keynote Speaker", color: "yellow", href: "#" }
    ]}
  />
);

storiesOf("Composites/ProfilePreview", module)
  .add("complete profile with fixed image", () => (
    <ProfilePreview
      name={profiles[0].name}
      jobtitle={profiles[0].jobtitle}
      organization={profiles[0].organization}
      badges={badges}
      m={2}
    >
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[0].name}
          height={128}
          width={128}
          src={profiles[0].img}
          className={className}
        />
      )}
    </ProfilePreview>
  ))
  .add("no jobtitle", () => (
    <ProfilePreview
      name={profiles[1].name}
      organization={profiles[1].organization}
      m={2}
    >
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[1].name}
          height={128}
          width={128}
          src={profiles[1].img}
          className={className}
        />
      )}
    </ProfilePreview>
  ))
  .add("no organization", () => (
    <ProfilePreview
      name={profiles[2].name}
      jobtitle={profiles[2].jobtitle}
      m={2}
    >
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[2].name}
          height={128}
          width={128}
          src={profiles[2].img}
          className={className}
        />
      )}
    </ProfilePreview>
  ))
  .add("really long strings", () => (
    <ProfilePreview
      name={profiles[29].name}
      jobtitle={profiles[29].jobtitle}
      organization={profiles[29].organization}
      m={2}
    >
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[29].name}
          height={128}
          width={128}
          src={profiles[29].img}
          className={className}
        />
      )}
    </ProfilePreview>
  ))
  .add("responsive image", () => (
    <ProfilePreview
      name={profiles[3].name}
      jobtitle={profiles[3].jobtitle}
      organization={profiles[3].organization}
      m={2}
    >
      {({ className }) => (
        <Fragment>
          <Image
            display={["inline-block", "none"]}
            alt={profiles[3].name}
            height={64}
            width={64}
            src={profiles[3].img}
            className={className}
          />
          <Image
            display={["none", "inline-block"]}
            alt={profiles[3].name}
            height={128}
            width={128}
            src={profiles[3].img}
            className={className}
          />
        </Fragment>
      )}
    </ProfilePreview>
  ))
  .add("name only with custom font size", () => (
    <ProfilePreview name={profiles[4].name} fontSize={[7, 6]} m={2}>
      {({ className }) => (
        <Fragment>
          <Image
            display={["inline-block", "none"]}
            alt={profiles[4].name}
            height={32}
            width={32}
            src={profiles[4].img}
            className={className}
          />
          <Image
            display={["none", "inline-block"]}
            alt={profiles[4].name}
            height={64}
            width={64}
            src={profiles[4].img}
            className={className}
          />
        </Fragment>
      )}
    </ProfilePreview>
  ));
