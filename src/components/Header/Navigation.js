import React from 'react';
import { arrayOf, bool } from 'prop-types';
import { display, maxHeight, overflow, position } from 'styled-system';
import { Button, Flex, Text } from 'rebass';
import { colorType, linkType } from '../../types';
import { CloseIcon } from '../../tokens';
import SmartLink from '../SmartLink';
import { useHeaderContext } from './context';

const Navigation = ({ links, button, open, color, bg, ...props }) => {
  const { setMenuOpen } = useHeaderContext();
  return (
    <Flex
      {...props}
      as="nav"
      css={`
        ${display}
        ${maxHeight}
        ${overflow}
        ${position}
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
      `}
      display={[open ? 'flex' : 'none', 'flex']}
      flexDirection={['column', 'row']}
      justifyContent={['flex-start', 'flex-end']}
      alignItems="center"
      color={color}
      bg={bg}
      maxHeight={['100vh', 80, 96]}
      position={['fixed', 'static']}
      overflow="auto"
    >
      <Flex
        css={`
          ${overflow}
          a:last-child {
            margin-right: 0;
          }
        `}
        flexDirection={['column', 'row']}
        alignItems="center"
        pt={[5, 0]}
        px={0}
        my={0}
        overflow="auto"
      >
        {links.map(({ href, text }) => (
          <SmartLink key={href} href={href} mb={[3, 0]} mr={[0, 3, 4]}>
            <Text color={color} fontSize={4} fontWeight="bold">
              {text}
            </Text>
          </SmartLink>
        ))}
      </Flex>
      {button && (
        <Button
          as={SmartLink}
          color={bg}
          bg={color}
          href={button.href}
          my={[4, 0]}
          mr={[4, 0]}
          ml={4}
        >
          <Text fontSize={4}>{button.text}</Text>
        </Button>
      )}
      <Button
        css={`
          ${display}
          position: absolute;
          top: 0;
          right: 0;
        `}
        display={['inline-block', 'none']}
        onClick={() => {
          setMenuOpen(false);
        }}
        color={color}
        bg="transparent"
        px={3}
        py={3}
      >
        <CloseIcon width={24} />
      </Button>
    </Flex>
  );
};

Navigation.propTypes = {
  links: arrayOf(linkType).isRequired,
  button: linkType,
  open: bool.isRequired,
  color: colorType.isRequired,
  bg: colorType.isRequired,
};

export default Navigation;
