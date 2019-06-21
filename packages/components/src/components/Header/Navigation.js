import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import { compose, layout, position } from 'styled-system';
import { Button, Flex, Text } from 'rebass';
import { linkType } from '../../types';
import { CloseIcon } from '../../icons';
import SmartLink from '../SmartLink';
import { useHeaderContext } from './context';

const Navigation = ({
  links,
  button,
  open,
  color,
  bg,
  transparent,
  ...props
}) => {
  const { setMenuOpen } = useHeaderContext();
  let background;
  // open: never transparent.
  if (open) {
    background = bg;
  } else {
    // Transparent only if flag is set.
    background = transparent ? 'transparent' : bg;
  }
  return (
    <Flex
      {...props}
      as="nav"
      css={`
        ${compose(
          layout,
          position
        )}
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
      `}
      display={[open ? 'flex' : 'none', 'flex']}
      flexDirection={['column', 'row']}
      justifyContent={['flex-start', 'flex-end']}
      alignItems="center"
      color={color}
      bg={background}
      maxHeight={['100vh', 80, 96]}
      position={['fixed', 'static']}
      overflow="auto"
    >
      <Flex
        css={`
          ${layout}
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
        <SmartLink
          css={`
            ${layout}
          `}
          display={['flex', 'none']}
          key="/"
          href="/"
          mb={[3, 0]}
          mr={[0, 3, 4]}
        >
          <Text color={color} fontSize={[4, 3, 4]} fontWeight="bold">
            Home
          </Text>
        </SmartLink>
        {links.map(({ href, text }) => (
          <SmartLink key={href} href={href} mb={[3, 0]} mr={[0, 3, 4]}>
            <Text color={color} fontSize={[4, 3, 4]} fontWeight="bold">
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
          <Text fontSize={[4, 3, 4]}>{button.text}</Text>
        </Button>
      )}
      <Button
        css={`
          ${layout}
          position: absolute;
          top: 0;
          right: 0;
          -webkit-tap-highlight-color: transparent;
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
  color: string.isRequired,
  bg: string.isRequired,
  transparent: bool,
};

Navigation.defaultProps = {
  transparent: false,
};

export default Navigation;
