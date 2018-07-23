import styled from "styled-components";
import { space, themeGet } from "styled-system";

const MarkdownParagraph = styled.p`
  font-family: ${themeGet("fonts.serif")};
  line-height: ${themeGet("lineHeights.copy")};
  margin-top: 0;
  &:last-child {
    margin-bottom: 0;
  }
  ${space};
`;

MarkdownParagraph.propTypes = {
  mb: space.propTypes.mb
};

MarkdownParagraph.defaultProps = {
  mb: 3
};

export default MarkdownParagraph;
