import React from 'react';
import { func, shape, string } from 'prop-types';
import { Button, Flex, Heading, Text } from '@theme-ui/components';

import { responsiveNumberType } from '../../types';
import SmartLink from '../SmartLink';

const PostPreview = ({
  post,
  fontSize = [3, 4],
  colors = { text: 'text', background: 'background', accent: 'primary' },
  ...props
}) => {
  const mb = post.description ? 3 : 0;
  // Use flexDirection prop instead of sx prop to ensure it cannot be overridden.
  // Set m={0} in Heading due to https://github.com/styled-system/styled-system/issues/644.
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        fontFamily: 'body',
        color: colors.text,
        bg: colors.background,
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize,
          lineHeight: 'heading',
          m: 0,
          mt: 0,
          mb: 3,
        }}
      >
        {post.title}
      </Heading>
      {post.authors()}
      <Text as="time" sx={{ display: 'block', mb }}>
        {post.date}
      </Text>
      {post.description && (
        <Text
          as="p"
          sx={{
            lineHeight: 'body',
            my: 0,
          }}
        >
          {post.description}
        </Text>
      )}
      {post.href && (
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            as={SmartLink}
            sx={{
              alignSelf: ['stretch', 'flex-start'],
              whiteSpace: 'nowrap',
              color: colors.background,
              bg: colors.accent,
              mt: 3,
            }}
            href={post.href}
            variant="primary"
          >
            Read on
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  authors: func.isRequired,
  description: string,
  href: string,
});

PostPreview.propTypes = {
  post: postType.isRequired,
  fontSize: responsiveNumberType,
  colors: shape({
    text: string.isRequired,
    background: string.isRequired,
    accent: string.isRequired,
  }),
};

export default PostPreview;
