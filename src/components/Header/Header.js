import React from 'react';
import { arrayOf, func } from 'prop-types';
import styled from 'styled-components';
import { height } from 'styled-system';
import { Card, Flex, Text } from 'rebass';
import { colorType, linkType } from '../../types';
import SmartLink from '../SmartLink';
import SiteTitle from '../SiteTitle';
import Shapes from '../../tokens/Shapes';

const Wrapper = styled(Card)(height);

const Header = ({ title, color, links, ...props }) => (
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
                fontFamily="sans"
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
);

Header.propTypes = {
  title: func,
  color: colorType,
  links: arrayOf(linkType).isRequired,
};

Header.defaultProps = {
  title: function title(color) {
    return <SiteTitle color={color} />;
  },
  color: 'primary',
};

export default Header;
