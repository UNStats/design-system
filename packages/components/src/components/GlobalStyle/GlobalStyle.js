import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: ${({ theme }) => theme.lineHeights.copy};
    color: ${({ theme }) => theme.colors.text};
    backgroundColor: ${({ theme }) => theme.colors.backgroundColor}
  }
`;

export default GlobalStyle;
