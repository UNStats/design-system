import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";

const Wrapper = styled.div`
  ${space};
`;

const List = ({ anchor, color, item, mt, mb, values }) => (
  <Wrapper mt={mt} mb={mb}>
    {values.map((value, index) =>
      item({ ...value, anchor, color, key: index })
    )}
  </Wrapper>
);

List.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  color: PropTypes.string,
  /** Render prop for list items. */
  item: PropTypes.func.isRequired,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  values: PropTypes.arrayOf(PropTypes.object)
};

List.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "primary"
};

export default List;
