import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Badge from "../Badge";
import Anchor from "../Anchor/Anchor";
import { colors } from "../../theme";

const List = styled(Flex)`
  div:last-child {
    margin-right: 0;
  }
`;

const BadgeList = ({ Anchor: A, values, ...props }) => (
  <List flexWrap="wrap" justifyContent="center" {...props}>
    {values.map(({ color, href, text }) => (
      <Badge Anchor={A} color={color} href={href} mb={2} mr={2} key={text}>
        {text}
      </Badge>
    ))}
  </List>
);

BadgeList.propTypes = {
  Anchor: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.oneOf(Object.keys(colors)),
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

BadgeList.defaultProps = {
  Anchor
};

export default BadgeList;
