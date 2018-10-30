import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select } from "@storybook/addon-knobs";
import { Image, Link } from "rebass";
import GridList from "./GridList";
import PostPreview from "../PostPreview";
import ProfilePreview from "../ProfilePreview";
import posts from "../../../test/posts";
import profiles from "../../../test/profiles";

storiesOf("Composites/GridList", module)
  .add("avatar example", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 2)}
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
      width={number("width", 64)}
      m={2}
    />
  ))
  .add("profile example", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 3)}
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
      width={number("width", 256)}
      m={2}
    />
  ))
  .add("post example", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 4)}
      render={({ href, ...post }) => (
        <Link color="text" href={href} key={href}>
          <PostPreview {...post} />
        </Link>
      )}
      values={posts.map(({ authors, ...post }) => ({
        // Remove href from authors to ensure they are not linked in PostPreview.
        // Entire PostPreview is linked instead.
        authors: authors.map(({ name, img, href, ...author }) => ({
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={64}
              width={64}
              src={img}
            />
          ),
          key: href,
          name,
          ...author
        })),
        ...post
      }))}
      width={number("width", 512)}
      m={2}
    />
  ))
  .add("1 item", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 3)}
      render={({ key, ...props }) => <ProfilePreview key={key} {...props} />}
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
          key: href
        }))}
      width={number("width", 256)}
      m={2}
    />
  ))
  .add("2 items", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 3)}
      color="black"
      render={props => <ProfilePreview {...props} />}
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
          key: href
        }))}
      width={number("width", 256)}
      m={2}
    />
  ))
  .add("3 items", () => (
    <GridList
      align={select(
        "align",
        {
          left: "left",
          center: "center",
          right: "right"
        },
        "center"
      )}
      gap={number("gap", 3)}
      color="black"
      render={props => <ProfilePreview {...props} />}
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
          key: href
        }))}
      width={number("width", 256)}
      m={2}
    />
  ));
