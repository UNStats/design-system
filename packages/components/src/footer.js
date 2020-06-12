import React from 'react';
import { arrayOf, node, shape, string, oneOf } from 'prop-types';
import { Box, Container, Flex, Heading, Link, Text } from 'theme-ui';

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
            <Link
              href="/"
              sx={{ color: 'inherit', height: '100%', mb: [1, 2] }}
            >
              {logo}
            </Link>
          )}
          {title && (
            <Link href="/" sx={{ color: 'inherit' }}>
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
            </Link>
          )}
          {socialIcons}
          <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                sx={{ color: 'inherit', px: [2, 3], py: [1, 2] }}
              >
                <Text sx={{ fontFamily: 'body', textAlign: 'center' }}>
                  {link.text}
                </Text>
              </Link>
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
  links: arrayOf(
    shape({
      text: string.isRequired,
      href: string,
      label: string,
    })
  ).isRequired,
  variant: oneOf(['primary', 'secondary']),
};

export default Footer;
