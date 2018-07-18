import styled from "styled-components";
import { height, space, width } from "styled-system";

const Box = styled.div`
  ${height};
  ${space};
  ${width};
`;

Box.propTypes = {
  ...height.propTypes,
  ...space.propTypes,
  ...width.propTypes
};

export default Box;
