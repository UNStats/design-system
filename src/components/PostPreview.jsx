import React from "react";
import { Flex, Text } from "rebass";
import Link from "./Link";
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
    {post.authors()}
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

UnlinkedPostPreview.propTypes = {
  post: postType.isRequired
};

const PostPreview = ({ post, ...props }) => {
  if (post.href) {
    return (
      <Link css="display: block;" {...props} href={post.href}>
        <UnlinkedPostPreview post={post} />
      </Link>
    );
  }
  return <UnlinkedPostPreview {...props} post={post} />;
};

PostPreview.propTypes = {
  post: postType.isRequired
};

export default PostPreview;
