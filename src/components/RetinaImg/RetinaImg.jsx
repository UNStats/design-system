import React from "react";
import PropTypes from "prop-types";

// DPR 1x: images[0], DPR 2x: images[1] ...
const RetinaImg = ({ images, alt, className }) => (
  <img
    srcSet={images.map((img, index) => `${img} ${index + 1}x`).join(", ")}
    src={images.slice(-1)[0]}
    alt={alt}
    className={className}
  />
);

RetinaImg.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

RetinaImg.defaultProps = {
  className: ""
};

export default RetinaImg;
