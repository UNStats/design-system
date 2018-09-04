import React from "react";
import PropTypes from "prop-types";
import { fontSize, space } from "styled-system";
import { Flex } from "grid-styled";
import Avatar from "../../primitives/Avatar";
import Heading from "../../primitives/Heading";
import Text from "../../primitives/Text";

const ProfilePreview = ({
  name,
  fontSize: size,
  jobtitle,
  organization,
  badges,
  children,
  ...props
}) => (
  <Flex flexDirection="column" alignItems="center" {...props}>
    <Avatar mb={[1, 2]}>{children}</Avatar>
    <Heading.h1
      fontFamily="sansSerif"
      fontSize={size}
      textAlign={["center", "left"]}
      mt={0}
    >
      {name}
    </Heading.h1>
    {jobtitle && (
      <Text
        fontFamily="sansSerif"
        fontSize={5}
        textAlign="center"
        mt={[1, 2, 3]}
        mb={0}
      >
        {jobtitle}
      </Text>
    )}
    {organization && (
      <Text
        fontFamily="sansSerif"
        fontSize={5}
        fontWeight="bold"
        textAlign="center"
        mt={1}
        mb={0}
      >
        {organization}
      </Text>
    )}
    {badges && badges()}
  </Flex>
);

ProfilePreview.propTypes = {
  /** Image render prop. */
  children: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  /** Responsive font size for name. */
  fontSize: fontSize.propTypes.fontSize,
  jobtitle: PropTypes.string,
  organization: PropTypes.string,
  /** Badges render prop. */
  badges: PropTypes.func,
  ...space.propTypes
};

ProfilePreview.defaultProps = {
  fontSize: [4, 3],
  jobtitle: "",
  organization: "",
  badges: undefined
};

export default ProfilePreview;
