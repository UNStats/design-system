import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, flexDirection, fontSize, space } from "styled-system";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${color};
  ${flexDirection};
`;

const Year = styled.div`
  ${fontSize};
  ${space};
`;

const Hashtag = styled.div`
  ${fontSize};
`;

const Title = ({ color, year }) => (
  <Wrapper color={color} flexDirection={["row", "column"]}>
    <Year fontSize={[4, 3, 2]} mr={[2, 0]}>
      {year}
    </Year>
    <Hashtag fontSize={[4, 4, 3]}>#UNDataForum</Hashtag>
  </Wrapper>
);

Title.propTypes = {
  color: PropTypes.string,
  year: PropTypes.number.isRequired
};

Title.defaultProps = {
  color: "primary"
};

export default Title;
