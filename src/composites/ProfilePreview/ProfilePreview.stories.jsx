import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Image } from "rebass";
import { display } from "styled-system";
import ProfilePreview from "./ProfilePreview";
import NewTabLink from "../../primitives/NewTabLink";
import rawProfiles from "../../../test/profiles";

// Remove href from profiles.
const profiles = rawProfiles.map(({ href, ...profile }) => ({ ...profile }));

const Img = styled(Image)(display);

const badges = [
  { text: "Committee Member", color: "red", href: "/committee" },
  { text: "Keynote Speaker", color: "yellow", href: "/keynotes" }
];

storiesOf("Composites/ProfilePreview", module)
  .addWithJSX("complete profile", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[0].name}
          borderRadius="circle"
          height={128}
          width={128}
          src={profiles[0].img}
        />
      )}
      name={profiles[0].name}
      affiliation={{
        jobtitle: profiles[0].jobtitle,
        organization: profiles[0].organization
      }}
      badges={badges}
      m={2}
    />
  ))
  .addWithJSX("avatar only", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[1].name}
          borderRadius="circle"
          height={64}
          width={64}
          src={profiles[1].img}
        />
      )}
      m={2}
    />
  ))
  .addWithJSX("avatar and name only", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[2].name}
          borderRadius="circle"
          height={128}
          width={128}
          src={profiles[2].img}
        />
      )}
      name={profiles[2].name}
      m={2}
    />
  ))
  .addWithJSX("responsive image", () => (
    <ProfilePreview
      avatar={() => (
        <Fragment>
          <Img
            display={["block", "none"]}
            alt={profiles[3].name}
            borderRadius="circle"
            height={32}
            width={32}
            src={profiles[3].img}
          />
          <Img
            display={["none", "block", "none"]}
            alt={profiles[3].name}
            borderRadius="circle"
            height={64}
            width={64}
            src={profiles[3].img}
          />
          <Img
            display={["none", "none", "block"]}
            alt={profiles[3].name}
            borderRadius="circle"
            height={128}
            width={128}
            src={profiles[3].img}
          />
        </Fragment>
      )}
      name={profiles[3].name}
      m={2}
    />
  ))
  .addWithJSX("custom font size", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[4].name}
          borderRadius="circle"
          height={128}
          width={128}
          src={profiles[4].img}
        />
      )}
      name={profiles[4].name}
      fontSize={[2, 4]}
      m={2}
    />
  ))
  .addWithJSX("custom link", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[5].name}
          borderRadius="circle"
          height={128}
          width={128}
          src={profiles[5].img}
        />
      )}
      name={profiles[5].name}
      badges={badges}
      link={NewTabLink}
      m={2}
    />
  ))
  .addWithJSX("really long strings", () => (
    <ProfilePreview
      avatar={() => (
        <Img
          display="block"
          alt={profiles[29].name}
          borderRadius="circle"
          height={128}
          width={128}
          src={profiles[29].img}
        />
      )}
      name={profiles[29].name}
      affiliation={{
        jobtitle: profiles[29].jobtitle,
        organization: profiles[29].organization
      }}
      badges={badges}
      m={2}
    />
  ));
