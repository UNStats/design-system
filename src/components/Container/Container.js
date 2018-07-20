import React from "react";
import styled from "styled-components";
import { maxWidth, space } from "styled-system";

/**
 * Container is a block element, which occupies availalbe width.
 * The Wrapper cannot have any padding, only top and bottom margins.
 * The Limiter stretches as much as possible up to a maximum width.
 * What looks like the Container's padding on small screens is actually the Limiter's padding.
 */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${space};
`;

const Limiter = styled.div`
  width: 100%;
  height: 100%;
  ${maxWidth};
  ${space};
`;

const Container = ({ children, maxWidth, mt, mb }) => (
  <Wrapper mt={mt} mb={mb}>
    <Limiter maxWidth={maxWidth} px={[2, 3]}>
      {children}
    </Limiter>
  </Wrapper>
);

Container.propTypes = {
  ...maxWidth.propTypes,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb
};

export default Container;
