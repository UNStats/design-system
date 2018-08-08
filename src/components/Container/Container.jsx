import React from "react";
import styled from "styled-components";
import { maxWidth, space } from "styled-system";

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

const Container = ({ children, maxWidth: mxWidth, mt, mb, pt, pb, px }) => (
  <Wrapper mt={mt} mb={mb}>
    <Limiter maxWidth={mxWidth} px={px} pt={pt} pb={pb}>
      {children}
    </Limiter>
  </Wrapper>
);

Container.propTypes = {
  ...maxWidth.propTypes,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  pt: space.propTypes.pt,
  pb: space.propTypes.pb,
  px: space.propTypes.px
};

Container.defaultProps = {
  mt: 0,
  mb: 0,
  pt: 0,
  pb: 0,
  px: [2, 3]
};

export default Container;
