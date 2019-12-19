import React, { useState } from 'react';
import { arrayOf, func, string, oneOf } from 'prop-types';
import { Box, Button, Container, Flex, Heading } from '@theme-ui/components';

import { responsiveType } from '../../types';
import { CloseIcon, MenuIcon } from '../../icons';
import SmartLink, { linkType } from '../SmartLink';

import { Context } from './context';

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
              variant={variant}
            >
              {logo()}
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
              variant={variant}
            >
              <Heading sx={{ whiteSpace: 'nowrap}', fontSize: [4, 5, 6] }}>
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
              variant: [`navigation.${variant}`, `pairings.${variant}`],
            }}
          >
            <Box
              aria-label="close menu"
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
              <CloseIcon scaleTo="height" />
            </Box>

            <Flex
              sx={{
                flexDirection: ['column', 'row'],
                alignItems: 'center',
                overflow: 'auto',
              }}
            >
              <SmartLink
                sx={{
                  display: ['flex', 'none'],
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  fontWeight: 'bold',
                  mb: [4, 0],
                  ml: [0, 3, 4],
                }}
                href="/"
                key="/"
                variant={variant}
              >
                Home
              </SmartLink>
              {links.map(({ href, text }) => (
                <SmartLink
                  sx={{
                    flexShrink: 0,
                    fontFamily: 'body',
                    fontSize: [4, 3, 4],
                    fontWeight: 'bold',
                    mb: [4, 0],
                    ml: [0, 3, 4],
                  }}
                  key={href}
                  href={href}
                  variant={variant}
                >
                  {text}
                </SmartLink>
              ))}
            </Flex>
            {button && (
              <Button
                variant="outline"
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
              >
                {button.text}
              </Button>
            )}
          </Box>
          <Box
            aria-label="open menu"
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
            <MenuIcon scaleTo="height" />
          </Box>
        </Flex>
      </Container>
    </Context.Provider>
  );
};

export const variants = ['branded', 'transparent', 'primary'];
const variantType = oneOf(variants);

Header.propTypes = {
  logo: func,
  title: string,
  links: arrayOf(linkType).isRequired,
  button: linkType,
  height: responsiveType,
  variant: variantType,
};

export default Header;
