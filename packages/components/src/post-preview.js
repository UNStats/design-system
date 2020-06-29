import React from 'react';
import { node, shape, string } from 'prop-types';
import { Badge, Box, Button, Flex, Link, Text } from 'theme-ui';

const PostPreview = ({ post, ...props }) => {
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
        <Box sx={{ mb: 2 }}>
          <Badge
            sx={{
              // Anything below variant cannot be overridden by this variant.
              variant: 'post-preview.badge',
            }}
          >
            {post.tag}
          </Badge>
        </Box>
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
              // Anything below variant cannot be overridden by this variant.
              variant: `post-preview.button`,
              alignSelf: ['stretch', 'flex-start'],
              whiteSpace: 'nowrap',
            }}
            href={post.href}
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
};

export default PostPreview;
