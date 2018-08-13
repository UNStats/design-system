import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import Badge from "../Badge";
import DefaultAnchor from "../../components/DefaultAnchor";

const List = styled.div`
  div:last-child {
    margin-right: 0;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${space};
`;

const BadgeList = ({ Anchor, values, ...props }) => (
  <List {...props}>
    {values.map(({ color, href, text }) => (
      <Badge Anchor={Anchor} color={color} href={href} mb={2} mr={2} key={text}>
        {text}
      </Badge>
    ))}
  </List>
);

BadgeList.propTypes = {
  Anchor: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: Badge.propTypes.color,
      href: Badge.propTypes.href,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

BadgeList.defaultProps = {
  Anchor: DefaultAnchor
};

export default BadgeList;
