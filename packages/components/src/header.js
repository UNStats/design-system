import React, { useState } from 'react';
import { arrayOf, node, string, oneOf } from 'prop-types';
import {
  Box,
  Button,
  Close,
  Container,
  Flex,
  Heading,
  MenuButton,
} from 'theme-ui';

import { responsiveType } from './types';
import SmartLink, { linkType } from './smart-link';

const Context = React.createContext({});

const Header = ({
  logo,
  title,
  links,
  button,
  height = [48, 64, 80],
  variant = 'branded',
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
            <SmartLink
              sx={{ height: '100%', flexShrink: 0, mr: [2, 3] }}
              href="/"
              aria-label="Back to homepage"
              variant="inherit"
            >
              {logo}
            </SmartLink>
          )}
          {title && (
            <SmartLink
              sx={{
                flexGrow: 0,
                flexShrink: 0,
                mr: [0, 3, 4],
              }}
              href="/"
              aria-label="Back to homepage"
              variant="inherit"
            >
              <Heading
                sx={{
                  whiteSpace: 'nowrap}',
                  fontSize: [4, 5, 6],
                }}
              >
                {title}
              </Heading>
            </SmartLink>
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
              <SmartLink
                key="/"
                sx={{
                  display: ['flex', 'none'],
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  fontWeight: 'bold',
                  mb: [4, 0],
                  ml: [0, 3, 4],
                }}
                href="/"
                label="Back to homepage"
                variant="inherit"
              >
                Home
              </SmartLink>
              {links.map(({ href, text, label }) => (
                <SmartLink
                  key={href}
                  sx={{
                    flexShrink: 0,
                    fontFamily: 'body',
                    fontSize: [4, 3, 4],
                    fontWeight: 'bold',
                    mb: [4, 0],
                    ml: [0, 3, 4],
                  }}
                  href={href}
                  label={label}
                  variant="inherit"
                >
                  {text}
                </SmartLink>
              ))}
            </Flex>
            {button && (
              <Button
                variant="outline.primary"
                as={SmartLink}
                sx={{
                  flexGrow: 0,
                  flexShrink: 0,
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  color: 'inherit',
                  my: [4, 0],
                  ml: [0, 3, 4],
                }}
                href={button.href}
                label={button.label}
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
  links: arrayOf(linkType).isRequired,
  button: linkType,
  height: responsiveType,
  variant: oneOf(['branded', 'primary']),
};

export default Header;
