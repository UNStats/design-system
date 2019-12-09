import React from 'react';
import { func, shape, string } from 'prop-types';
import { Button, Flex, Heading, Text } from '@theme-ui/components';

import { responsiveNumberType } from '../../types';
import SmartLink from '../SmartLink';

const PostPreview = ({ post, fontSize = [3, 4], ...props }) => {
  const mb = post.description ? 3 : 0;
  // Use flexDirection prop instead of sx prop to ensure it cannot be overridden.
  // Set m={0} in Heading due to https://github.com/styled-system/styled-system/issues/644.
  return (
    <Flex {...props} sx={{ flexDirection: 'column' }}>
      <Heading
        as="h1"
        sx={{
          color: 'text',
          fontFamily: 'body',
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
      <Text
        as="time"
        sx={{ color: 'text', display: 'block', fontFamily: 'body', mb }}
      >
        {post.date}
      </Text>
      {post.description && (
        <Text
          as="p"
          sx={{
            color: 'text',
            fontFamily: 'body',
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
              fontFamily: 'body',
              whiteSpace: 'nowrap',
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
};

export default PostPreview;
