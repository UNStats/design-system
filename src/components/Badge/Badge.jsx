import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import theme from "../theme";

const colorScheme = props => {
  const { backgroundColor, color } = theme.colorSchemes[props.color];
  return {
    backgroundColor: theme.colors[backgroundColor],
    color: theme.colors[color]
  };
};

const Wrapper = styled.div`
  display: inline-block;
  a {
    display: block;
    height: 100%;
    text-decoration: none;
    transition: all 0.5s ease-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.2s ease-in;
    }
  }
  ${space};
`;

const Pill = styled.div`
  border-radius: 9999px;
  font-size: ${props => props.theme.fontSizes[7]};
  font-weight: bold;
  ${colorScheme};
  ${space};
`;

const Badge = ({ children, href, color, render, ...props }) => (
  <Wrapper {...props}>
    {render(
      href,
      <Pill color={color} px={2} py={1}>
        {children}
      </Pill>
    )}
  </Wrapper>
);

Badge.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  href: PropTypes.string.isRequired,
  render: PropTypes.func
};

Badge.defaultProps = {
  color: "primary",
  render: (href, text) => <a href={href}>{text}</a>
};

export default Badge;
