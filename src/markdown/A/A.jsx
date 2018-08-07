import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeGet } from "styled-system";
import { anchorStyle } from "../../style";

const Wrapper = styled.span`
  ${anchorStyle};
  color: ${({ color }) => themeGet(`colors.${color}`)};
  a {
    display: inline;
  }
`;

const A = ({ anchor, href, children, ...props }) => (
  <Wrapper {...props}>{anchor({ href, children })}</Wrapper>
);

A.propTypes = {
  anchor: PropTypes.func,
  color: PropTypes.string,
  href: PropTypes.string.isRequired
};

A.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "primary"
};

export default A;
