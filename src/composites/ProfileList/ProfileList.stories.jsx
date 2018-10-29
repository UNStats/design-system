import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "rebass";
import ProfileList from "./ProfileList";
import profiles from "../../../test/profiles";

const defaultProfileMap = ({
  name,
  jobtitle,
  organization,
  img,
  ...profile
}) => ({
  ...profile,
  name,
  avatar: () => (
    <Image alt={name} borderRadius="circle" height={64} width={64} src={img} />
  )
});

storiesOf("Composites/ProfileList", module)
  .add("1 profile", () => (
    <ProfileList
      values={profiles.slice(0, 1).map(defaultProfileMap)}
      width={96}
      m={2}
    />
  ))
  .add("2 profiles", () => (
    <ProfileList
      values={profiles.slice(0, 2).map(defaultProfileMap)}
      width={96}
      m={2}
    />
  ))
  .add("many profiles", () => (
    <ProfileList values={profiles.map(defaultProfileMap)} width={96} m={2} />
  ))
  .add("align left", () => (
    <ProfileList
      align="left"
      values={profiles.map(defaultProfileMap)}
      width={96}
      m={2}
    />
  ))
  .add("align right", () => (
    <ProfileList
      align="right"
      values={profiles.map(defaultProfileMap)}
      width={96}
      m={2}
    />
  ))
  .add("full profiles", () => (
    <ProfileList
      fontSize={[3, 4]}
      gap={4}
      values={profiles.map(
        ({ name, jobtitle, organization, img, ...profile }) => ({
          ...profile,
          name,
          affiliation: { jobtitle, organization },
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={128}
              width={128}
              src={img}
            />
          )
        })
      )}
      width={256}
      m={2}
    />
  ));
