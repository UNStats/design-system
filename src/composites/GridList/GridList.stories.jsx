import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";
import { Image, Link } from "rebass";
import GridList from "./GridList";
import ProfilePreview from "../ProfilePreview";
import profiles from "../../../test/profiles";

storiesOf("Composites/GridList", module)
  .addWithJSX("avatar example", () => (
    <GridList
      gap={number("gap", 2)}
      m={2}
      render={({ avatar, href }) => (
        <Link href={href} key={href}>
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
      width={text("width", "64px")}
    />
  ))
  .addWithJSX("profile example", () => (
    <GridList
      gap={number("gap", 3)}
      m={2}
      render={({ avatar, name, affiliation, href }) => (
        <Link color="text" href={href} key={href}>
          <ProfilePreview
            avatar={avatar}
            name={name}
            affiliation={affiliation}
          />
        </Link>
      )}
      values={profiles.map(({ name, jobtitle, organization, img, href }) => ({
        avatar: () => (
          <Image
            alt={name}
            borderRadius="circle"
            height={128}
            width={128}
            src={img}
          />
        ),
        name,
        affiliation: {
          jobtitle,
          organization
        },
        href
      }))}
      width={text("width", "256px")}
    />
  ))
  .addWithJSX("1 item", () => (
    <GridList
      m={2}
      render={ProfilePreview}
      values={profiles
        .slice(0, 1)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={128}
              width={128}
              src={img}
            />
          ),
          name,
          affiliation: {
            jobtitle,
            organization
          },
          href
        }))}
      width="256px"
    />
  ))
  .addWithJSX("2 items", () => (
    <GridList
      color="black"
      m={2}
      render={ProfilePreview}
      values={profiles
        .slice(0, 2)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={128}
              width={128}
              src={img}
            />
          ),
          name,
          affiliation: {
            jobtitle,
            organization
          },
          href
        }))}
      width="256px"
    />
  ))
  .addWithJSX("3 items", () => (
    <GridList
      color="black"
      m={2}
      render={ProfilePreview}
      values={profiles
        .slice(0, 3)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={128}
              width={128}
              src={img}
            />
          ),
          name,
          affiliation: {
            jobtitle,
            organization
          },
          href
        }))}
      width="256px"
    />
  ));
