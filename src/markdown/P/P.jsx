import React from "react";
import PropTypes from "prop-types";
import { space } from "styled-system";
import Text from "../../helpers/Text";

const Paragraph = Text.p.extend`
  &:last-child {
    margin-bottom: 0;
  }
`;

const P = ({ children, mb }) => (
  <Paragraph fontFamily="serif" lineHeight="copy" mt={0} mb={mb}>
    {children}
  </Paragraph>
);

P.propTypes = {
  children: PropTypes.node.isRequired,
  mb: space.propTypes.mb
};

P.defaultProps = {
  mb: 3
};

export default P;
