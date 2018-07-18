import styled from "styled-components";
import { maxWidth, space } from "styled-system";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${maxWidth};
  ${space};
`;

Container.propTypes = {
  ...maxWidth.propTypes,
  ...space.propTypes
};

export default Container;
