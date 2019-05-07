import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    fontFamily: ${({ theme }) => theme.fonts.serif};
    lineHeight: ${({ theme }) => theme.lineHeights.copy};
    color: ${({ theme }) => theme.colors.text};
    backgroundColor: ${({ theme }) => theme.colors.backgroundColor}
  }
`;

export default GlobalStyle;
