import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { space } from "styled-system";

const Avatar = ({ children, ...props }) => {
  const StyledImage = styled(children)`
    border-radius: 50%;
    ${space};
  `;
  return <StyledImage {...props} />;
};

Avatar.propTypes = {
  children: PropTypes.func.isRequired,
  ...space.propTypes
};

export default Avatar;
