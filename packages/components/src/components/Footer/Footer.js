import React from 'react';
import { arrayOf, func, string, oneOf } from 'prop-types';
import { Flex, Heading } from 'rebass';
import { linkType } from '../../types';
import Container from '../Container';
import FlexList from '../FlexList';
import SmartLink from '../SmartLink';

const Footer = ({
  logo,
  title,
  social,
  links,
  variant = 'primary',
  ...props
}) => {
  return (
    <Container {...props} maxWidth="wide" px={0}>
      <Flex
        as="footer"
        sx={{ flexDirection: 'column', alignItems: 'center', p: [2, 3] }}
        variant={`footer.${variant}`}
      >
        {logo && (
          <SmartLink color="inherit" href="/" height="100%" mb={[1, 2]}>
            {logo()}
          </SmartLink>
        )}
        {title && (
          <SmartLink color="inherit" href="/">
            <Heading
              sx={{
                whiteSpace: 'nowrap',
                fontFamily: 'heading',
                fontSize: [3, 4, 5],
                mb: [2, 3],
              }}
            >
              {title}
            </Heading>
          </SmartLink>
        )}
        {social && social()}
        <FlexList
          render={link => (
            <SmartLink
              color="inherit"
              href={link.href}
              key={link.href}
              fontFamily="body"
              px={[2, 3]}
              py={[1, 2]}
            >
              {link.text}
            </SmartLink>
          )}
          values={links}
        />
      </Flex>
    </Container>
  );
};

export const variants = ['primary', 'secondary', 'inverse'];
const variantType = oneOf(variants);

Footer.propTypes = {
  logo: func,
  title: string,
  social: func,
  links: arrayOf(linkType).isRequired,
  variant: variantType,
};

export default Footer;
