import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "styled-system";
import { Flex, Link, Text } from "rebass";
import Badge from "../../primitives/Badge";
import FlexList from "../FlexList";

const style = {
  left: {
    alignItems: "flex-start",
    css: { "a:last-child": { "margin-right": 0 } },
    ml: 0,
    mr: 2
  },
  center: {
    alignItems: "center",
    css: {
      "a:first-child": { "margin-left": 0 },
      "a:last-child": { "margin-right": 0 }
    },
    ml: 1,
    mr: 1
  },
  right: {
    alignItems: "flex-end",
    css: { "a:first-child": { "margin-left": 0 } },
    ml: 2,
    mr: 0
  }
};

const ProfilePreview = ({
  avatar,
  name,
  affiliation,
  badges,
  align,
  fontSize,
  link,
  ...props
}) => (
  <Flex {...props} flexDirection="column" alignItems={style[align].alignItems}>
    {avatar()}
    <Text
      as="h1"
      color="text"
      fontFamily="sans"
      fontSize={fontSize}
      textAlign={align}
      mt={0}
      mb={0}
    >
      {name}
    </Text>
    {affiliation && (
      <Flex flexDirection="column" mt={3}>
        <Text color="text" fontFamily="sans" fontSize={2} textAlign={align}>
          {affiliation.jobtitle}
        </Text>
        <Text
          color="text"
          fontFamily="sans"
          fontSize={2}
          fontWeight="bold"
          textAlign={align}
          mt={1}
        >
          {affiliation.organization}
        </Text>
      </Flex>
    )}
    {badges && (
      <FlexList
        css={style[align].css}
        mt={3}
        render={({ color, href, text }) => (
          <Link
            as={link}
            href={href}
            key={href}
            ml={style[align].ml}
            mr={style[align].mr}
          >
            <Badge color={color}>{text}</Badge>
          </Link>
        )}
        values={badges}
      />
    )}
  </Flex>
);

ProfilePreview.propTypes = {
  /** Render prop. */
  avatar: PropTypes.func.isRequired,
  name: PropTypes.string,
  affiliation: PropTypes.shape({
    jobtitle: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired
  }),
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  align: PropTypes.oneOf(["left", "center", "right"]),
  /** Responsive font-size for name. */
  fontSize: propTypes.responsive,
  /** Use this link to link badges. */
  link: PropTypes.func
};

ProfilePreview.defaultProps = {
  align: "center",
  name: undefined,
  affiliation: undefined,
  badges: undefined,
  fontSize: [3, 4],
  link: undefined
};

export default ProfilePreview;
