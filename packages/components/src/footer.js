import React from 'react';
import { arrayOf, node, shape, string } from 'prop-types';
import { Box, Container, Flex, Heading, Link, Text } from 'theme-ui';

const Footer = ({ logo, title, socialIcons, links }) => {
  return (
    <Box
      sx={{
        color: 'background',
        bg: 'secondary',
        // Anything below variant cannot be overridden by this variant.
        variant: 'footer',
      }}
    >
      <Container
        sx={{
          maxWidth: '96em',
          px: [2, 3, 4],
          py: 4,
          // Anything below variant cannot be overridden by this variant.
          variant: 'footer.container',
        }}
      >
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
              sx={{
                mb: [3, 4],
                // Anything below variant cannot be overridden by this variant.
                variant: 'footer.logo',
                color: 'inherit',
                height: '100%',
                textDecoration: 'none',
              }}
            >
              {logo}
            </Link>
          )}
          {title && (
            <Link
              href="/"
              sx={{
                mb: [2, 3],
                // Anything below variant cannot be overridden by this variant.
                variant: 'footer.title',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Heading
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: [3, 4, 5],
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
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  px: [2, 3],
                  py: [1, 2],
                }}
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
};

export default Footer;
