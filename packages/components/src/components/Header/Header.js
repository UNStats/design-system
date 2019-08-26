import React, { useState } from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import { layout } from 'styled-system';
import { Button, Flex, Heading } from 'rebass';
import { linkType, responsiveType } from '../../types';
import { MenuIcon } from '../../icons';
import Container from '../Container';
import SmartLink from '../SmartLink';
import { Context } from './context';
import Navigation from './Navigation';

const Header = ({
  logo,
  title,
  links,
  button,
  height,
  pathname,
  color,
  bg,
  transparent,
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // No logo and no title: move menu button to right with flex-end.
  // Otherwise use space-between to move logo and/or title left and menu button right.
  const justifyContent = !logo && !title ? 'flex-end' : 'space-between';
  const background = transparent ? 'transparent' : bg;
  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      <Container {...props} maxWidth={9}>
        <Flex
          as="header"
          css={`
            ${layout}
          `}
          flexDirection="row"
          justifyContent={justifyContent}
          alignItems="center"
          height={height}
          width="100%"
          color={color}
          bg={background}
          p={[2, 3]}
        >
          {logo && (
            <SmartLink
              css="
                height: 100%;
              "
              href="/"
              color={color}
              mr={[2, 3]}
            >
              {logo()}
            </SmartLink>
          )}
          {title && (
            <SmartLink href="/" flex={[1, 0]} mr={[0, 4, 5]}>
              <Heading
                css="
                  white-space: nowrap;
                "
                color={color}
                fontSize={[4, 5, 6]}
              >
                {title}
              </Heading>
            </SmartLink>
          )}
          <Navigation
            flex={1}
            links={links}
            button={button}
            open={menuOpen}
            pathname={pathname}
            color={color}
            bg={bg}
            transparent={transparent}
          />
          <Button
            css={`
              ${layout}
              z-index: 1;
              -webkit-tap-highlight-color: transparent;
            `}
            display={['inline-block', 'none']}
            color={color}
            bg="transparent"
            onClick={() => {
              setMenuOpen(true);
            }}
            px={1}
            py={0}
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
  pathname: string,
  color: string,
  bg: string,
  transparent: bool,
};

Header.defaultProps = {
  color: 'primary',
  bg: 'background',
  transparent: false,
};

export default Header;
