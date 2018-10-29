import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "rebass";
import PostPreview from "./PostPreview";
import rawPosts from "../../../test/posts";

// Remove href from posts.
const posts = rawPosts.map(({ href, ...post }) => ({ ...post }));

storiesOf("Composites/PostPreview", module)
  .addWithJSX("1 author", () => {
    const { authors, title, date, lead } = posts[0];
    return (
      <PostPreview
        title={title}
        date={date}
        authors={authors.map(({ name, img, href, ...author }) => ({
          ...author,
          name,
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={64}
              width={64}
              src={img}
            />
          )
        }))}
        lead={lead}
        m={2}
      />
    );
  })
  .addWithJSX("2 authors", () => {
    const { authors, title, date, lead } = posts[1];
    return (
      <PostPreview
        title={title}
        date={date}
        authors={authors.map(({ name, img, href, ...author }) => ({
          ...author,
          name,
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={64}
              width={64}
              src={img}
            />
          )
        }))}
        lead={lead}
        m={2}
      />
    );
  })
  .addWithJSX("many authors", () => {
    const { authors, title, date } = posts[2];
    return (
      <PostPreview
        title={title}
        date={date}
        authors={authors.map(({ name, img, href, ...author }) => ({
          ...author,
          name,
          avatar: () => (
            <Image
              alt={name}
              borderRadius="circle"
              height={64}
              width={64}
              src={img}
            />
          )
        }))}
        lead={posts[2].lead}
        m={2}
      />
    );
  });
