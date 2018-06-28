import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, space } from "styled-system";
import Avatar from "../Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${space};
`;

const Name = styled.h1`
  text-align: center;
  ${fontSize};
  ${space};
`;

const NameTag = ({ name, img, color, ...props }) => (
  <Wrapper {...props}>
    <Avatar
      alt={name}
      img={img}
      size={["md", "lg", "lg"]}
      border={3}
      borderColor={color}
      p={2}
      mb={[1, 2, 2]}
    />
    <Name fontSize={[5, 4, 3]} my={0}>
      {name}
    </Name>
  </Wrapper>
);

NameTag.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: Avatar.propTypes.color
};

NameTag.defaultProps = {
  color: "primary"
};

export default NameTag;
