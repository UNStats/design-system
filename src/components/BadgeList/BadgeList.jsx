import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import Badge from "../Badge";

const List = styled.div`
  div:last-child {
    margin-right: 0;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${space};
`;

const BadgeList = ({ anchor, values, ...props }) => (
  <List {...props}>
    {values.map(({ color, href, text }, index) => (
      <Badge
        anchor={anchor}
        color={color}
        href={href}
        mb={2}
        mr={2}
        key={index}
      >
        {text}
      </Badge>
    ))}
  </List>
);

BadgeList.propTypes = {
  anchor: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.shape({ ...Badge.propTypes })).isRequired
};

BadgeList.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default BadgeList;
