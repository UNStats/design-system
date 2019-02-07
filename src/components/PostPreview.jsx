import React from "react";
import { Flex, Text } from "rebass";
import GridList from "./GridList";
import Link from "./Link";
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

UnlinkedPostPreview.propTypes = {
  post: postType.isRequired
};

const PostPreview = ({ post, ...other }) => {
  if (post.href) {
    return (
      <Link {...other} href={post.href}>
        <UnlinkedPostPreview post={post} />
      </Link>
    );
  }
  return <UnlinkedPostPreview {...other} post={post} />;
};

PostPreview.propTypes = {
  post: postType.isRequired
};

export default PostPreview;
