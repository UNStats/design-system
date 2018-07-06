import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { fontFamily, lineHeight } from "styled-system";
import theme from "../theme";

injectGlobal`body {
  margin: 0;
}`;

export const Base = styled.div`
  * {
    box-sizing: border-box;
  }
  ${fontFamily};
  ${lineHeight};
`;

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Base fontFamily="sansSerif" lineHeight="copy">
      {children}
    </Base>
  </ThemeProvider>
);

export default Provider;
