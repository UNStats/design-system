import React, { useState } from 'react';
import { arrayOf, node, shape, string } from 'prop-types';
import {
  Box,
  Button,
  Close,
  Container,
  Flex,
  Heading,
  Link,
  MenuButton,
} from 'theme-ui';

const Context = React.createContext({});

const height = [48, 64, 80];

const Header = ({ logo, title, links, button, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      <Box
        {...props}
        sx={{
          color: 'background',
          bg: 'primary',
          // Anything below variant cannot be overridden by this variant.
          variant: 'header',
        }}
      >
        <Container
          sx={{
            maxWidth: '96em',
            px: [2, 3, 4],
            py: [2, 3],
            // Anything below variant cannot be overridden by this variant.
            variant: 'header.container',
          }}
        >
          <Flex
            as="header"
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height,
            }}
          >
            {logo && (
              <Link
                href="/"
                aria-label="Back to homepage"
                sx={{
                  color: 'inherit',
                  height: '100%',
                  flexShrink: 0,
                  textDecoration: 'none',
                  mr: [2, 3],
                }}
              >
                {logo}
              </Link>
            )}
            {title && (
              <Link
                href="/"
                aria-label="Back to homepage"
                sx={{
                  color: 'inherit',
                  flex: 'none',
                  textDecoration: 'none',
                  mr: [0, 3, 4],
                }}
              >
                <Heading
                  as="div"
                  sx={{
                    whiteSpace: 'nowrap',
                    fontSize: [4, 5, 6],
                  }}
                >
                  {title}
                </Heading>
              </Link>
            )}
            <Box
              as="nav"
              sx={{
                bg: 'primary',
                // Anything below variant cannot be overridden by this variant.
                variant: `header.nav`,
                display: [menuOpen ? 'flex' : 'none', 'flex'],
                flexDirection: ['column', 'row'],
                justifyContent: ['flex-start', 'flex-end'],
                alignItems: 'center',
                flex: 1,
                // Fixed positioning relative to viewport on small screens.
                position: ['fixed', 'static'],
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                // Color is inherited, but background-color is not.
                pb: [4, 0],
              }}
            >
              <Box
                aria-label="Close navigation"
                sx={{
                  // Show navigation close button on small screens only.
                  display: ['block', 'none'],
                  height,
                  width: '100%',
                  textAlign: 'right',
                  p: 2,
                  my: 2,
                }}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Close css={{ WebkitTapHighlightColor: 'transparent' }} />
              </Box>
              <Flex
                sx={{
                  flexDirection: ['column', 'row'],
                  alignItems: 'center',
                  overflow: 'auto',
                }}
              >
                <Link
                  key="/"
                  href="/"
                  aria-label="Back to homepage"
                  sx={{
                    color: 'inherit',
                    display: ['flex', 'none'],
                    textDecoration: 'none',
                    mb: [4, 0],
                    ml: [0, 3, 4],
                  }}
                >
                  <Heading as="div" sx={{ fontSize: [4, 3, 4] }}>
                    Home
                  </Heading>
                </Link>
                {links.map(({ href, text }) => (
                  <Link
                    key={href}
                    href={href}
                    sx={{
                      color: 'inherit',
                      flexShrink: 0,
                      fontSize: [4, 3, 4],
                      textDecoration: 'none',
                      mb: [4, 0],
                      mr: [0, 3, 4],
                      '&:last-of-type': {
                        mr: 0,
                        mb: 0,
                      },
                    }}
                  >
                    <Heading as="div" sx={{ fontSize: [4, 3, 4] }}>
                      {text}
                    </Heading>
                  </Link>
                ))}
              </Flex>
              {button && (
                <Button
                  as={Link}
                  href={button.href}
                  sx={{
                    color: 'primary',
                    bg: 'background',
                    // Anything below variant cannot be overridden by this variant.
                    variant: 'header.cta',
                    flex: 'none',
                    mt: [4, 0],
                    ml: [0, 3, 4],
                  }}
                >
                  <Heading as="div" sx={{ fontSize: [4, 3, 4] }}>
                    {button.text}
                  </Heading>
                </Button>
              )}
            </Box>
            <Box
              aria-label="Open navigation"
              sx={{
                display: ['block', 'none'],
                flex: 1,
                height: '100%',
                textAlign: 'right',
                py: 2,
                zIndex: 1,
              }}
              onClick={() => {
                setMenuOpen(true);
              }}
            >
              <MenuButton
                css={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Open navigation"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Context.Provider>
  );
};

const linkType = shape({
  text: string.isRequired,
  href: string,
});

Header.propTypes = {
  logo: node,
  title: string,
  links: arrayOf(linkType).isRequired,
  button: linkType,
};

export default Header;
