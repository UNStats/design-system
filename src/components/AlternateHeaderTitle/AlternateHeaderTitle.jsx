import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color as colorUtility,
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

const Year = styled.div`
  ${fontSize};
  ${space};
`;

const Hashtag = styled.div`
  ${fontSize};
`;

const AlternateHeaderTitle = ({ color, year }) => (
  <Wrapper color={color} flexDirection={["row", "column"]}>
    <Year fontSize={[4, 3, 2]} mr={[2, 0]}>
      {year}
    </Year>
    <Hashtag fontSize={[4, 4, 3]}>#UNDataForum</Hashtag>
  </Wrapper>
);

AlternateHeaderTitle.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  year: PropTypes.number.isRequired
};

AlternateHeaderTitle.defaultProps = {
  color: "primary"
};

export default AlternateHeaderTitle;
