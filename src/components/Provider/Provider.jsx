import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, injectGlobal } from "styled-components";
import { normalize } from "polished";
import theme from "../../theme";

// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
injectGlobal`
  ${normalize()};
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

// ThemeProvider can have one child only.
// With div added, Provider can have multiple children.
const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
