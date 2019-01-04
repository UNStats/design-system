import React from "react";
import { Flex, Link, Text } from "rebass";
import { withTheme } from "styled-components";
import GridList from "./GridList";
import ProfilePreview from "./ProfilePreview";
import { postType } from "../types";

const UnlinkedPostPreview = ({ post, ...props }) => (
  <Flex {...props} flexDirection="column">
    <Text
      as="h1"
      color="text"
      fontFamily="sans"
      lineHeight="title"
      mt={0}
      mb={3}
    >
      {post.title}
    </Text>
    <GridList
      align="left"
      gap={2}
      render={author => (
        <ProfilePreview
          profile={author}
          align="left"
          fontSize={1}
          key={author.id}
        />
      )}
      values={post.authors}
      width={96}
      mb={3}
    />
    <Text as="time" color="text" css="display: block;" fontFamily="sans" mb={3}>
      {post.date}
    </Text>
    {post.lead && (
      <Text as="p" color="text" fontFamily="serif" lineHeight="copy" my={0}>
        {post.lead}
      </Text>
    )}
  </Flex>
);

const PostPreview = ({ post, theme, ...props }) => {
  if (post.href) {
    return (
      <Link {...props} as={theme.internalLink} href={post.href}>
        <UnlinkedPostPreview post={post} />
      </Link>
    );
  }
  return <UnlinkedPostPreview {...props} post={post} />;
};

PostPreview.propTypes = {
  post: postType.isRequired
};

export default withTheme(PostPreview);
