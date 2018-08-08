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
    {values.map(({ color, href, text }) => (
      <Badge anchor={anchor} color={color} href={href} mb={2} mr={2} key={text}>
        {text}
      </Badge>
    ))}
  </List>
);

BadgeList.propTypes = {
  anchor: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: Badge.propTypes.color,
      href: Badge.propTypes.href,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

BadgeList.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>
};

export default BadgeList;
