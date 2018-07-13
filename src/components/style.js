import { css } from "styled-components";

export const anchor = css`
  a {
    height: 100%;
    display: block;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }
  }
`;
