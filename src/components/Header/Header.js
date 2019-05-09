import React, { useState } from 'react';
import { arrayOf, func } from 'prop-types';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { colorType, linkType } from '../../types';
import SiteTitle from '../SiteTitle';
import SmartLink from '../SmartLink';

const Header = ({ title, color, bg, links, button, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Flex {...props} as="header" color={color} bg={bg} p={2}>
      <Heading flex={1} color={color}>
        {title}
      </Heading>
      <Box
        css={`
          display: ${menuOpen ? 'block' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
        `}
        bg={bg}
      >
        <Flex
          as="ul"
          css="list-style: none; min-height: 100vh;"
          flexDirection="column"
          alignItems="center"
          width="100vw"
          py={5}
          px={0}
        >
          {links.map(({ href, text }) => (
            <li key={href}>
              <SmartLink href={href}>
                <Text as="span" color={color}>
                  {text}
                </Text>
              </SmartLink>
            </li>
          ))}
          {button && button.text && (
            <li>
              <Button as={SmartLink} href={button.href}>
                {button.text}
              </Button>
            </li>
          )}
        </Flex>
        <Button
          css={{ display: 'block', position: 'fixed', top: 0, right: 0 }}
          onClick={() => {
            setMenuOpen(false);
          }}
          p={3}
        >
          Close
        </Button>
      </Box>
      <Button
        color={bg}
        bg={color}
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        Menu
      </Button>
    </Flex>
  );
};

Header.propTypes = {
  title: func,
  color: colorType,
  bg: colorType,
  links: arrayOf(linkType).isRequired,
  button: linkType,
};

Header.defaultProps = {
  title: function title(color) {
    return <SiteTitle color={color} />;
  },
  color: 'background',
  bg: 'primary',
};

export default Header;

/*
    <Wrapper
      {...props}
      as="header"
      borderBottom="3px solid"
      borderColor={color}
      height={[64, 80, 96]}
    >
      <Flex
        css="box-sizing: border-box; height: 100%; maxWidth: 96rem;"
        justifyContent={['center', 'flex-start']}
        alignItems={['center', 'flex-end']}
        mx="auto"
        p={[1, 2]}
      >
        <SmartLink style={{ display: 'block' }} href="/">
          <Shapes height="100%" />
        </SmartLink>
        <Flex
          as="nav"
          flexDirection={['column', 'row']}
          flex={[0, 1]}
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'flex-end']}
          pl={[3, 2]}
        >
          <SmartLink css="display: block;" href="/" mb={[0, -1]}>
            {title(color)}
          </SmartLink>
          <Flex mb={[0, -1]}>
            {links.map(({ href, text }) => (
              <SmartLink key={href} href={href} ml={[2, 3, 4]} mr={[2, 0]}>
                <Text
                  as="span"
                  color={color}
                  fontFamily="body"
                  fontSize={[2, 3, 4]}
                  fontWeight="bold"
                >
                  {text}
                </Text>
              </SmartLink>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
*/
