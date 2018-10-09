import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";
import Badge from "../Badge";

const BadgeList = ({ link, values, ...props }) => (
  <Flex
    {...props}
    css={{
      "div:last-child": {
        "margin-right": 0
      }
    }}
    flexWrap="wrap"
    justifyContent="center"
  >
    {values.map(({ color, href, text }) => (
      <Badge color={color} href={href} link={link} mb={2} mr={2} key={text}>
        {text}
      </Badge>
    ))}
  </Flex>
);

BadgeList.propTypes = {
  link: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

BadgeList.defaultProps = {
  link: undefined
};

export default BadgeList;
