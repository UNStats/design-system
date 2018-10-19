import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { borderRadius } from "styled-system";
import { Text, Link } from "rebass";

const Pill = styled(Text)(borderRadius);

const Badge = ({
  children,
  color,
  href,
  link,
  theme: { colorSchemes },
  ...props
}) => (
  <Link {...props} as={link} css={{ display: "inline-block" }} href={href}>
    <Pill
      borderRadius="pill"
      {...colorSchemes[color]}
      fontFamily="sans"
      fontSize={0}
      fontWeight="bold"
      px={2}
      py={1}
    >
      {children}
    </Pill>
  </Link>
);

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  link: PropTypes.func
};

Badge.defaultProps = {
  color: "primary",
  link: undefined
};

export default withTheme(Badge);
