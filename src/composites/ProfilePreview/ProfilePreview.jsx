import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "rebass";
import BadgeList from "../../primitives/BadgeList";

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
    {badges && <BadgeList link={link} values={badges} mt={3} />}
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
