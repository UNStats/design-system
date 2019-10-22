import React from 'react';
import { func, shape, string } from 'prop-types';
import { Flex, Heading, Text } from '@theme-ui/components';
import { responsiveNumberType } from '../../types';
import SmartLink from '../SmartLink';

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  authors: func.isRequired,
  lead: string,
  href: string,
});

const UnlinkedPostPreview = ({ post, fontSize, ...props }) => {
  const mb = post.lead ? 3 : 0;
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
      {post.lead && (
        <Text
          as="p"
          sx={{ color: 'text', fontFamily: 'body', lineHeight: 'body', my: 0 }}
        >
          {post.lead}
        </Text>
      )}
    </Flex>
  );
};

UnlinkedPostPreview.propTypes = {
  post: postType.isRequired,
  fontSize: responsiveNumberType.isRequired,
};

const PostPreview = ({ post, fontSize = [3, 4], ...props }) => {
  if (post.href) {
    return (
      <SmartLink css={{ display: 'block' }} {...props} href={post.href}>
        <UnlinkedPostPreview post={post} fontSize={fontSize} />
      </SmartLink>
    );
  }
  return <UnlinkedPostPreview {...props} post={post} fontSize={fontSize} />;
};

PostPreview.propTypes = {
  post: postType.isRequired,
  fontSize: responsiveNumberType,
};

export default PostPreview;
