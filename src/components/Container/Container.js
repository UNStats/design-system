import styled from "styled-components";
import { maxWidth, propTypes, space } from "styled-system";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${maxWidth};
  ${space};
`;

Container.propTypes = {
  ...propTypes.maxWidth,
  ...propTypes.space
};

export default Container;
