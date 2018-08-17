import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  lineHeight,
  space,
  textAlign
} from "styled-system";
import theme from "../../theme";

const Text = styled.div`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  ${space};
  ${textAlign};
`;

Text.propTypes = {
  color: color.propTypes,
  fontFamily: fontFamily.propTypes,
  fontSize: fontSize.propTypes,
  lineHeight: lineHeight.propTypes,
  m: space.propTypes.m,
  mt: space.propTypes.mt,
  mr: space.propTypes.mr,
  mb: space.propTypes.mb,
  ml: space.propTypes.ml,
  mx: space.propTypes.mx,
  my: space.propTypes.my,
  p: space.propTypes.p,
  pt: space.propTypes.pt,
  pr: space.propTypes.pr,
  pb: space.propTypes.pb,
  pl: space.propTypes.pl,
  px: space.propTypes.px,
  py: space.propTypes.py,
  textAlign: textAlign.propTypes
};

Text.defaultProps = {
  theme
};

Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");

export default Text;
