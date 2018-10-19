import React from "react";
import PropTypes from "prop-types";
import { Flex, Link, Text } from "rebass";
import Badge from "../../primitives/Badge";
import FlexList from "../FlexList";

const ProfilePreview = ({
  avatar,
  name,
  affiliation,
  badges,
  fontSize,
  link,
  ...props
}) => (
  <Flex {...props} flexDirection="column" alignItems="center">
    {avatar()}
    <Text
      as="h1"
      fontFamily="sans"
      fontSize={fontSize}
      textAlign="center"
      mt={0}
      mb={0}
    >
      {name}
    </Text>
    {affiliation && (
      <Flex flexDirection="column" mt={3}>
        <Text fontFamily="sans" fontSize={2} textAlign="center">
          {affiliation.jobtitle}
        </Text>
        <Text
          fontFamily="sans"
          fontSize={2}
          fontWeight="bold"
          textAlign="center"
          mt={1}
        >
          {affiliation.organization}
        </Text>
      </Flex>
    )}
    {badges && (
      <FlexList
        mt={3}
        render={({ color, href, text }) => (
          <Link as={link} href={href} key={href} m={1}>
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
  /** Responsive font-size for name. */
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  link: PropTypes.func
};

ProfilePreview.defaultProps = {
  name: undefined,
  affiliation: undefined,
  badges: undefined,
  fontSize: [3, 4],
  link: undefined
};

export default ProfilePreview;
