import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import defaultTheme from "../defaultTheme";
import { themeType } from "../types";

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

const Provider = ({ children, theme }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: themeType
};

Provider.defaultProps = {
  theme: {}
};

export default Provider;
