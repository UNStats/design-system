import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { normalize } from "polished";
import theme from "../theme";

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

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;
