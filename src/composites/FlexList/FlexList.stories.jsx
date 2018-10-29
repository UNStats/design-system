import React from "react";
import { storiesOf } from "@storybook/react";
import { Image, Link } from "rebass";
import FlexList from "./FlexList";
import Badge from "../../primitives/Badge";
import ProfilePreview from "../ProfilePreview";
import badges from "../../../test/badges";
import profiles from "../../../test/profiles";

storiesOf("Composites/FlexList", module)
  .add("few avatars example", () => (
    <FlexList
      render={({ avatar, href }) => (
        <Link href={href} key={href} m={2}>
          <ProfilePreview avatar={avatar} />
        </Link>
      )}
      values={profiles.slice(0, 4).map(({ name, img, href }) => ({
        avatar: () => (
          <Image
            alt={name}
            borderRadius="circle"
            height={64}
            width={64}
            src={img}
          />
        ),
        href
      }))}
    />
  ))
  .add("many avatars example", () => (
    <FlexList
      render={({ avatar, href }) => (
        <Link href={href} key={href} m={2}>
          <ProfilePreview avatar={avatar} />
        </Link>
      )}
      values={profiles.map(({ name, img, href }) => ({
        avatar: () => (
          <Image
            alt={name}
            borderRadius="circle"
            height={64}
            width={64}
            src={img}
          />
        ),
        href
      }))}
    />
  ))
  .add("few badges example", () => (
    <FlexList
      render={({ color, href, text }) => (
        <Link href={href} key={href} m={1}>
          <Badge color={color}>{text}</Badge>
        </Link>
      )}
      values={badges.slice(0, 4)}
    />
  ))
  .add("many badges example", () => (
    <FlexList
      render={({ color, href, text }) => (
        <Link href={href} key={href} m={1}>
          <Badge color={color}>{text}</Badge>
        </Link>
      )}
      values={badges}
    />
  ));
