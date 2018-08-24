import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  space
} from "styled-system";

const Text = styled.div`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${textAlign};
  ${space};
`;

Text.defaultProps = {
  m: 0
};

Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");

export default Text;
