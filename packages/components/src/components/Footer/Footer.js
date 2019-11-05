import React from 'react';
import { arrayOf, func, string, oneOf } from 'prop-types';
import { Flex, Heading, Text } from '@theme-ui/components';

import Container from '../Container';
import FlexList from '../FlexList';
import SmartLink, { linkType } from '../SmartLink';

const Footer = ({
  logo,
  title,
  social,
  links,
  variant = 'primary',
  ...props
}) => {
  return (
    <Container {...props} maxWidth="wide" px={0}>
      <Flex
        as="footer"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          p: [2, 3],
          variant: `footer.${variant}`,
        }}
      >
        {logo && (
          <SmartLink href="/" variant={variant} height="100%" mb={[1, 2]}>
            {logo()}
          </SmartLink>
        )}
        {title && (
          <SmartLink href="/" variant={variant}>
            <Heading
              sx={{
                whiteSpace: 'nowrap',
                fontFamily: 'heading',
                fontSize: [3, 4, 5],
                mb: [2, 3],
              }}
            >
              {title}
            </Heading>
          </SmartLink>
        )}
        {social && social()}
        <FlexList
          render={link => (
            <SmartLink
              href={link.href}
              key={link.href}
              px={[2, 3]}
              py={[1, 2]}
              variant={variant}
            >
              <Text sx={{ fontFamily: 'body' }}>{link.text}</Text>
            </SmartLink>
          )}
          values={links}
        />
      </Flex>
    </Container>
  );
};

export const variants = ['primary', 'secondary', 'inverse'];
const variantType = oneOf(variants);

Footer.propTypes = {
  logo: func,
  title: string,
  social: func,
  links: arrayOf(linkType).isRequired,
  variant: variantType,
};

export default Footer;
