import React from 'react';
import { arrayOf, func, string, oneOf } from 'prop-types';
import { Box, Container, Flex, Heading, Text } from '@theme-ui/components';

import SmartLink, { linkType } from '../SmartLink';

const Footer = ({ logo, title, social, links, variant = 'primary' }) => {
  return (
    <Box sx={{ variant: `pairings.${variant}` }}>
      <Container sx={{ maxWidth: 'width.wide', p: [2, 3, 4] }}>
        <Flex
          as="footer"
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
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
          {social && social(variant)}
          <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map(link => (
              <SmartLink
                href={link.href}
                key={link.href}
                px={[2, 3]}
                py={[1, 2]}
                variant={variant}
              >
                <Text sx={{ fontFamily: 'body', textAlign: 'center' }}>
                  {link.text}
                </Text>
              </SmartLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
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
