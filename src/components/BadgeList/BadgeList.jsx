import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import theme from "../theme";
import Badge from "../Badge";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${space};
`;

const BadgeList = ({ badges, render, ...props }) => (
  <List {...props}>
    {badges.map(({ color, href, text }) => (
      <Badge color={color} href={href} render={render} p={1} key={text}>
        {text}
      </Badge>
    ))}
  </List>
);

BadgeList.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      color: PropTypes.oneOf(Object.keys(theme.colors))
    })
  ).isRequired,
  render: PropTypes.func
};

BadgeList.defaultProps = {
  render: (href, text) => <a href={href}>{text}</a>
};

export default BadgeList;
