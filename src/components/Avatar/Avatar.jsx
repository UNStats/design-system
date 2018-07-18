import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  borders,
  borderColor,
  space,
  propTypes,
  responsiveStyle
} from "styled-system";
import theme from "../theme";

// Set CSS width based on size prop.
const width = responsiveStyle({
  prop: "size",
  cssProperty: "width",
  numbertoPx: false,
  key: "avatarSizes"
});

// Set CSS min-height based on size prop.
const minHeight = responsiveStyle({
  prop: "size",
  cssProperty: "min-height",
  numbertoPx: false,
  key: "avatarSizes"
});

const Img = styled.img`
  display: inline-block;
  ${borders};
  ${borderColor};
  border-radius: 50%;
  ${width};
  ${minHeight};
  ${space};
`;

const Avatar = ({ alt, img, size, color, ...props }) => (
  <Img src={img} alt={alt} size={size} borderColor={color} {...props} />
);

Avatar.propTypes = {
  /** Valid sizes: sm (32px), md (64px), lg (128px). */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["sm", "md", "lg"]),
    PropTypes.arrayOf(PropTypes.oneOf(["sm", "md", "lg"]))
  ]),
  /** Alt text for avatar image. */
  alt: PropTypes.string.isRequired,
  /** Image URL. Use 500px x 500px, which is fine for DPR 2.0+.  */
  img: PropTypes.string.isRequired,
  /** Border color. */
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  /** Adjust borders. */
  ...propTypes.borders,
  /** Adjust spacing. */
  ...propTypes.space
};

Avatar.defaultProps = {
  color: "primary",
  border: 0,
  size: "md"
};

export default Avatar;
