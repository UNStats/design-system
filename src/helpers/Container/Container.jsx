import React from "react";
import styled from "styled-components";
import { maxWidth, space } from "styled-system";
import { Flex } from "grid-styled";

const Outer = styled(Flex)`
  height: 100%;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  ${maxWidth};
  ${space};
`;

const Container = ({
  children,
  maxWidth: mxWidth,
  mt,
  mb,
  pt,
  pb,
  px,
  ...props
}) => (
  <Outer flexDirection="column" alignItems="center" mt={mt} mb={mb} {...props}>
    <Inner maxWidth={mxWidth} px={px} pt={pt} pb={pb}>
      {children}
    </Inner>
  </Outer>
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
