import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { borderRadius } from "styled-system";
import { Text } from "rebass";

const Pill = styled(Text)(borderRadius);

const Badge = ({
  children,
  color,
  href,
  link,
  theme: { colorSchemes },
  ...props
}) => (
  <Pill
    {...props}
    css={{ display: "inline-block" }}
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
);

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

Badge.defaultProps = {
  color: "primary"
};

export default withTheme(Badge);
