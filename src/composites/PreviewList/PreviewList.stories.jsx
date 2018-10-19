import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, text } from "@storybook/addon-knobs/react";
import { Image } from "rebass";
import PreviewList from "./PreviewList";
import ProfilePreview from "../ProfilePreview";
import profiles from "../../../test/profiles";
import NewTabLink from "../../primitives/NewTabLink";

storiesOf("Composites/PreviewList", module)
  .addWithJSX("avatar example", () => (
    <PreviewList
      preview={ProfilePreview}
      gap={number("gap", 2)}
      width={text("width", "64px")}
      values={profiles.map(({ name, img, href }) => ({
        avatar: () => (
          <Image
            css={{ display: "block" }}
            alt={name}
            borderRadius="circle"
            height={64}
            width={64}
            src={img}
          />
        ),
        href
      }))}
      m={2}
    />
  ))
  .addWithJSX("profile example", () => (
    <PreviewList
      color={select(
        "color",
        {
          primary: "primary",
          blue: "blue",
          green: "green",
          red: "red",
          yellow: "yellow",
          black: "black"
        },
        "black"
      )}
      gap={number("gap", 3)}
      width={text("width", "256px")}
      preview={ProfilePreview}
      values={profiles.map(({ name, jobtitle, organization, img, href }) => ({
        avatar: () => (
          <Image
            css={{ display: "block" }}
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
      m={2}
    />
  ))
  .addWithJSX("1 item", () => (
    <PreviewList
      color="black"
      width="256px"
      preview={ProfilePreview}
      values={profiles
        .slice(0, 1)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              css={{ display: "block" }}
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
      m={2}
    />
  ))
  .addWithJSX("2 items", () => (
    <PreviewList
      color="black"
      width="256px"
      preview={ProfilePreview}
      values={profiles
        .slice(0, 2)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              css={{ display: "block" }}
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
      m={2}
    />
  ))
  .addWithJSX("3 items", () => (
    <PreviewList
      color="black"
      width="256px"
      preview={ProfilePreview}
      values={profiles
        .slice(0, 3)
        .map(({ name, jobtitle, organization, img, href }) => ({
          avatar: () => (
            <Image
              css={{ display: "block" }}
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
      m={2}
    />
  ))
  .addWithJSX("custom link", () => (
    <PreviewList
      color="black"
      width="256px"
      preview={ProfilePreview}
      values={profiles.map(({ name, jobtitle, organization, img, href }) => ({
        avatar: () => (
          <Image
            css={{ display: "block" }}
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
      link={NewTabLink}
      m={2}
    />
  ));
