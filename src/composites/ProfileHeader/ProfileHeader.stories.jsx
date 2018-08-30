import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { display } from "styled-system";
import ProfileHeader from "./ProfileHeader";
import profiles from "../../profiles";
import NewTabAnchor from "../../primitives/NewTabAnchor";

const badges = [
  { text: "Committee Member", color: "red", href: "#" },
  { text: "Keynote Speaker", color: "yellow", href: "#" }
];

const Image = styled.img`
  ${display};
`;

storiesOf("Composites/ProfileHeader", module)
  .addWithPercyOptions("fixed image", { skip: true }, () => (
    <ProfileHeader name={profiles[0].name} badges={badges} m={2}>
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
    </ProfileHeader>
  ))
  .addWithPercyOptions("long name", { skip: true }, () => (
    <ProfileHeader name={profiles[1].name} badges={badges} m={2}>
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
    </ProfileHeader>
  ))
  .addWithPercyOptions("responsive image", { skip: true }, () => (
    <ProfileHeader name={profiles[2].name} badges={badges} m={2}>
      {({ className }) => (
        <Fragment>
          <Image
            display={["inline-block", "none"]}
            alt={profiles[2].name}
            height={64}
            width={61}
            src={profiles[2].img}
            className={className}
          />
          <Image
            display={["none", "inline-block"]}
            alt={profiles[2].name}
            height={128}
            width={128}
            src={profiles[2].img}
            className={className}
          />
        </Fragment>
      )}
    </ProfileHeader>
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <ProfileHeader
      name={profiles[3].name}
      badges={badges}
      Anchor={NewTabAnchor}
      m={2}
    >
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[3].name}
          height={128}
          width={128}
          src={profiles[3].img}
          className={className}
        />
      )}
    </ProfileHeader>
  ))
  .addWithPercyOptions("no badges", { skip: true }, () => (
    <ProfileHeader name={profiles[4].name} m={2}>
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[4].name}
          height={128}
          width={128}
          src={profiles[4].img}
          className={className}
        />
      )}
    </ProfileHeader>
  ));
