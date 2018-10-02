import PropTypes from "prop-types";

const Avatar = ({ children }) => children();

Avatar.propTypes = {
  children: PropTypes.func.isRequired
};

export default Avatar;
