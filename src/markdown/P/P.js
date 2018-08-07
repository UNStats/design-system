import styled from "styled-components";
import { space, themeGet } from "styled-system";

const P = styled.p`
  font-family: ${themeGet("fonts.serif")};
  line-height: ${themeGet("lineHeights.copy")};
  margin-top: 0;
  &:last-child {
    margin-bottom: 0;
  }
  ${space};
`;

P.propTypes = {
  mb: space.propTypes.mb
};

P.defaultProps = {
  mb: 3
};

export default P;
