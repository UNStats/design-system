import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color as colorUtility,
  display,
  flexDirection,
  fontSize,
  space
} from "styled-system";
import { colors } from "../../theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${colorUtility};
  ${flexDirection};
`;

const Organization = styled.div`
  white-space: nowrap;
  ${fontSize};
  ${space};
`;

const Hide = styled.span`
  ${display};
`;

const Event = styled.div`
  white-space: nowrap;
  ${fontSize};
`;

const DefaultHeaderTitle = ({ color }) => (
  <Wrapper color={color} flexDirection={["row", "column"]}>
    <Organization fontSize={[4, 5, 4]} mr={[2, 0]}>
      U<Hide display={["none", "inline"]}>nited </Hide>N
      <Hide display={["none", "inline"]}>ations</Hide>
    </Organization>
    <Event fontSize={[4, 4, 3]}>World Data Forum</Event>
  </Wrapper>
);

DefaultHeaderTitle.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors))
};

DefaultHeaderTitle.defaultProps = {
  color: "primary"
};

export default DefaultHeaderTitle;
