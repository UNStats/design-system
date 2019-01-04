import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import theme from "../theme";

// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
const GlobalStyle = createGlobalStyle`
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

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
