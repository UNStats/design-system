import React, { useState } from 'react';
import { arrayOf, node, number, oneOfType, shape, string } from 'prop-types';
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

/**
 * There are no restrictions on what the variants can be called except that the default variant is called `primary`.
 * If you use @undataforum/preset you can use `primary`, `primary-inverse` variants out of the box.
 *
 * You can define your own variants under the `pairings` key.
 * But you should use the primary color in the header, not the secondary color.
 */

const Context = React.createContext({});

const Header = ({
  logo,
  title,
  links,
  button,
  height = [48, 64, 80],
  variant = 'primary',
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      <Container
        {...props}
        sx={{
          maxWidth: 'width.wide',
          px: [2, 3, 4],
          py: [2, 3],
          variant: `pairings.${variant}`,
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
                flexGrow: 0,
                flexShrink: 0,
                mr: [0, 3, 4],
              }}
            >
              <Heading
                sx={{
                  whiteSpace: 'nowrap}',
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
              display: [menuOpen ? 'flex' : 'none', 'flex'],
              flexDirection: ['column', 'row'],
              justifyContent: ['flex-start', 'flex-end'],
              alignItems: 'center',
              flexGrow: 1,
              flexShrink: 1,
              position: ['fixed', 'static'],
              overflow: 'auto',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 2,
              variant: `pairings.${variant}`,
            }}
          >
            <Box
              aria-label="Close navigation"
              sx={{
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
                label="Back to homepage"
                sx={{
                  color: 'inherit',
                  display: ['flex', 'none'],
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  fontWeight: 'bold',
                  mb: [4, 0],
                  ml: [0, 3, 4],
                }}
              >
                Home
              </Link>
              {links.map(({ href, text, label }) => (
                <Link
                  key={href}
                  href={href}
                  label={label}
                  sx={{
                    color: 'inherit',
                    flexShrink: 0,
                    fontFamily: 'body',
                    fontSize: [4, 3, 4],
                    fontWeight: 'bold',
                    mb: [4, 0],
                    ml: [0, 3, 4],
                  }}
                >
                  {text}
                </Link>
              ))}
            </Flex>
            {button && (
              <Button
                as={Link}
                href={button.href}
                label={button.label}
                variant="outline.primary"
                sx={{
                  color: 'inherit',
                  flexGrow: 0,
                  flexShrink: 0,
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  my: [4, 0],
                  ml: [0, 3, 4],
                }}
              >
                {button.text}
              </Button>
            )}
          </Box>
          <Box
            aria-label="Open navigation"
            sx={{
              display: ['block', 'none'],
              flexGrow: 1,
              flexShrink: 1,
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
    </Context.Provider>
  );
};

Header.propTypes = {
  logo: node,
  title: string,
  links: arrayOf(
    shape({
      text: string.isRequired,
      href: string,
      label: string,
    })
  ).isRequired,
  button: shape({
    text: string.isRequired,
    href: string,
    label: string,
  }),
  height: oneOfType([number, arrayOf(number), string, arrayOf(string)]),
  variant: string,
};

export default Header;
