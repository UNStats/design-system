import React from 'react';
import { arrayOf, node, string, oneOf } from 'prop-types';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';

import SmartLink, { linkType } from './smart-link';

const Footer = ({ logo, title, socialIcons, links, variant = 'primary' }) => {
  return (
    <Box sx={{ variant: `pairings.${variant}` }}>
      <Container sx={{ maxWidth: 'width.wide', px: [2, 3, 4], py: 4 }}>
        <Flex
          as="footer"
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {logo && (
            <SmartLink href="/" variant="inherit" height="100%" mb={[1, 2]}>
              {logo}
            </SmartLink>
          )}
          {title && (
            <SmartLink href="/" variant="inherit">
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
          {socialIcons}
          <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map(link => (
              <SmartLink
                href={link.href}
                key={link.href}
                px={[2, 3]}
                py={[1, 2]}
                variant="inherit"
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

Footer.propTypes = {
  logo: node,
  title: string,
  socialIcons: node,
  links: arrayOf(linkType).isRequired,
  variant: oneOf(['primary', 'secondary']),
};

export default Footer;
