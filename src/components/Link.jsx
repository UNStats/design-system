import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Link as RebassLink } from "rebass";
import { themeType } from "../types";

const Link = ({ children, href, theme, ...other }) => {
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <RebassLink {...other} as={theme.internalLink} href={href}>
        {children}
      </RebassLink>
    );
  }
  return (
    <RebassLink {...other} as={theme.externalLink} href={href}>
      {children}
    </RebassLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  theme: themeType.isRequired
};

export default withTheme(Link);
