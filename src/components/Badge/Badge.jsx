import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, space } from "styled-system";
import { colors, colorSchemes } from "../../theme";
import { anchorStyle } from "../../style";

const colorScheme = ({ color: id }) => {
  let backgroundColor, color;
  try {
    ({ backgroundColor, color } = colorSchemes[id]);
  } catch (e) {
    ({ backgroundColor, color } = colorSchemes["primary"]);
  }
  return {
    backgroundColor: colors[backgroundColor],
    color: colors[color]
  };
};

const Wrapper = styled.div`
  display: inline-block;
  ${anchorStyle};
  ${space};
`;

const Pill = styled.div`
  border-radius: 9999px;
  font-weight: bold;
  ${colorScheme};
  ${fontSize};
  ${space};
`;

const Badge = ({ anchor, href, color, children, ...props }) => (
  <Wrapper {...props}>
    {anchor({
      href,
      children: (
        <Pill color={color} fontSize={7} px={2} py={1}>
          {children}
        </Pill>
      )
    })}
  </Wrapper>
);

Badge.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  anchor: PropTypes.func
};

Badge.defaultProps = {
  color: "primary",
  anchor: ({ href, children }) => <a href={href}>{children}</a>
};

export default Badge;
