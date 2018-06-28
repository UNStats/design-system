import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import theme from "../theme";

injectGlobal`body {
  margin: 0;
}`;

export const Base = styled.div`
  font-family: ${props => props.theme.font.sansSerif};
  line-height: 1.4;
  * {
    box-sizing: border-box;
  }
`;

const Provider = props => (
  <ThemeProvider theme={theme}>
    <Base {...props} />
  </ThemeProvider>
);

export default Provider;
