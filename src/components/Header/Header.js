import React, { useState } from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import { display, height } from 'styled-system';
import { Button, Flex, Heading } from 'rebass';
import { colorType, linkType } from '../../types';
import { MenuIcon } from '../../tokens';
import { Context } from './context';
import Navigation from './Navigation';

const Header = ({
  logo,
  title,
  links,
  button,
  color,
  bg,
  transparent,
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // No logo and no title: move menu button to right with flex-end.
  // Otherwise use space-between to move logo and/or title left and menu button right.
  const justifyContent = !logo && !title ? 'flex-end' : 'space-between';
  // no logo and no title => flex-end
  // otherwise space-between
  const background = transparent ? 'transparent' : bg;
  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      <Flex
        {...props}
        as="header"
        css={`
          ${height}
        `}
        flexDirection="row"
        justifyContent={justifyContent}
        alignItems="center"
        height={[64, 80, 96]}
        width="100%"
        color={color}
        bg={background}
        p={[2, 3]}
      >
        {logo && logo()}
        {title && (
          <Heading
            css="
              display: flex;
              white-space: nowrap;
            "
            flex={[1, 0]}
            color={color}
            fontSize={[4, 5, 6]}
            mr={[0, 4, 5]}
          >
            {title}
          </Heading>
        )}
        <Navigation
          flex={1}
          links={links}
          button={button}
          open={menuOpen}
          color={color}
          bg={bg}
          transparent={transparent}
        />
        <Button
          css={`
            ${display}
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
    </Context.Provider>
  );
};

Header.propTypes = {
  logo: func,
  title: string,
  links: arrayOf(linkType).isRequired,
  button: linkType,
  color: colorType,
  bg: colorType,
  transparent: bool,
};

Header.defaultProps = {
  color: 'primary',
  bg: 'background',
  transparent: false,
};

export default Header;
