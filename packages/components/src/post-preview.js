import React from 'react';
import { node, shape, string } from 'prop-types';
import { Button, Flex, Text } from 'theme-ui';

import Badges from './badges';
import Link from './link';

const PostPreview = ({ post, variant = 'primary', ...props }) => {
  // If post date is last element, it should have bottom margin zero.
  const mb = post.description ? 3 : 0;
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        fontFamily: 'body',
      }}
    >
      {post.tag && (
        <Badges values={[post.tag]} variant={variant} mb={2}>
          {post.tag}
        </Badges>
      )}
      {post.title}
      {post.authors && post.authors}
      <Text as="time" sx={{ display: 'block', mb }}>
        {post.date}
      </Text>
      {post.description && post.description}
      {post.href && (
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            as={Link}
            sx={{
              alignSelf: ['stretch', 'flex-start'],
              whiteSpace: 'nowrap',
            }}
            href={post.href}
            variant={variant}
          >
            Read on
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

PostPreview.propTypes = {
  post: shape({
    tag: string,
    title: node.isRequired,
    date: string.isRequired,
    authors: node,
    description: node,
    href: string,
  }).isRequired,
  variant: string,
};

export default PostPreview;
