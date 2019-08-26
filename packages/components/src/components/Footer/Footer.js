import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { Box, Flex, Heading } from 'rebass';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { linkType, modeType } from '../../types';
import Container from '../Container';
import FlexList from '../FlexList';
import SmartLink from '../SmartLink';

const Footer = ({ logo, title, social, links, mode, ...props }) => {
  const color = themeGet(`colors.modes.${mode}.text`)(props);
  const bg = themeGet(`colors.modes.${mode}.background`)(props);
  return (
    <Box {...props} color={color} bg={bg}>
      <Container maxWidth={9}>
        <Flex as="footer" flexDirection="column" alignItems="center" p={[2, 3]}>
          {logo && (
            <SmartLink css="height: 100%;" href="/" color={color} mb={[1, 2]}>
              {logo()}
            </SmartLink>
          )}
          {title && (
            <SmartLink href="/">
              <Heading
                css="white-space: nowrap;"
                color={color}
                fontSize={[3, 4, 5]}
                mb={[2, 3]}
              >
                {title}
              </Heading>
            </SmartLink>
          )}
          {social && social()}
          <FlexList
            render={link => (
              <SmartLink
                color={color}
                href={link.href}
                key={link.href}
                py={[1, 2]}
                px={[2, 3]}
              >
                {link.text}
              </SmartLink>
            )}
            values={links}
          />
        </Flex>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  logo: func,
  title: string,
  social: func,
  links: arrayOf(linkType).isRequired,
  mode: modeType,
};

Footer.defaultProps = {
  mode: 'primary',
};

export default withTheme(Footer);
