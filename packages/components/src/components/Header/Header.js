import React, { useState } from 'react';
import { arrayOf, func, string, oneOf } from 'prop-types';
import { Box, Button, Flex, Heading } from '@theme-ui/components';
import { responsiveType } from '../../types';
import { CloseIcon, MenuIcon } from '../../icons';
import Container from '../Container';
import SmartLink, { linkType } from '../SmartLink';
import { Context } from './context';

export const variants = ['branded', 'transparent', 'primary'];
const variantType = oneOf(variants);

const Header = ({
  logo,
  title,
  links,
  button,
  height,
  variant = 'branded',
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      <Container {...props} maxWidth="wide" variant={`header.${variant}`}>
        <Flex
          as="header"
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height,
            width: '100%',
            px: [0, 0, 3],
            py: [2, 3],
            color: 'inherit',
            bg: 'inherit',
          }}
        >
          {logo && (
            <SmartLink
              css={{ height: '100%', flexShrink: 0 }}
              href="/"
              variant={variant}
              mr={[2, 3]}
            >
              {logo()}
            </SmartLink>
          )}
          {title && (
            <SmartLink
              sx={{
                flexGrow: 0,
                flexShrink: 0,
                mr: [3, 4, 5],
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
              maxHeight: ['100vh', 80, 96],
              position: ['fixed', 'static'],
              overflow: 'auto',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 2,
              color: 'inherit',
              bg: [
                variant === 'transparent' ? 'background' : 'inherit',
                'inherit',
              ],
            }}
          >
            <Flex
              sx={{
                flexDirection: ['column', 'row'],
                alignItems: 'center',
                pt: [5, 0],
                px: 0,
                my: 0,
                overflow: 'auto',
                'a:last-child': {
                  mr: 0,
                },
              }}
            >
              <SmartLink
                sx={{
                  display: ['flex', 'none'],
                  fontFamily: 'body',
                  fontSize: [4, 3, 4],
                  fontWeight: 'bold',
                  mb: [3, 0],
                  mr: [0, 3, 4],
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
                    color: 'inherit',
                    fontFamily: 'body',
                    fontSize: [4, 3, 4],
                    fontWeight: 'bold',
                    mb: [3, 0],
                    mr: [0, 3, 4],
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
                  mr: [4, 0],
                  ml: 4,
                }}
                href={button.href}
              >
                {button.text}
              </Button>
            )}
            <Button
              sx={{
                display: ['inline-block', 'none'],
                position: 'absolute',
                color: 'inherit',
                bg: 'transparent',
                px: 2,
                py: 3,
                top: 0,
                right: 0,
                WebkitTapHighlightColor: 'transparent',
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <CloseIcon width={24} />
            </Button>
          </Box>
          <Button
            sx={{
              display: ['inline-block', 'none'],
              flexGrow: 1,
              flexShrink: 1,
              textAlign: 'right',
              color: 'inherit',
              bg: 'transparent',
              p: 0,
              zIndex: 1,
              WebkitTapHighlightColor: 'transparent',
            }}
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <MenuIcon width={24} />
          </Button>
        </Flex>
      </Container>
    </Context.Provider>
  );
};

Header.propTypes = {
  logo: func,
  title: string,
  links: arrayOf(linkType).isRequired,
  button: linkType,
  height: responsiveType.isRequired,
  variant: variantType,
};

export default Header;
