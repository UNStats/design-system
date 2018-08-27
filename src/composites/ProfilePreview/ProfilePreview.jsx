import React from "react";
import PropTypes from "prop-types";
import { space } from "styled-system";
import { Flex } from "grid-styled";
import Avatar from "../../primitives/Avatar";
import Heading from "../../primitives/Heading";
import Text from "../../primitives/Text";

const ProfilePreview = ({ img, jobtitle, name, organization, ...props }) => (
  <Flex
    flexDirection={["column", "row"]}
    justifyContent="flex-start"
    alignItems="center"
    {...props}
  >
    <Avatar alt={name} img={img} size={["md", "md", "lg"]} mb={2} mr={[0, 3]} />
    <Flex flexDirection="column" alignItems={["center", "flex-start"]}>
      <Heading.h1
        fontFamily="sansSerif"
        fontSize={3}
        textAlign={["center", "left"]}
        mt={0}
        mb={2}
      >
        {name}
      </Heading.h1>
      {jobtitle && (
        <Text
          fontFamily="sansSerif"
          fontSize={5}
          textAlign={["center", "left"]}
          mt={0}
          mb={1}
        >
          {jobtitle}
        </Text>
      )}
      {organization && (
        <Text
          fontFamily="sansSerif"
          fontSize={5}
          fontWeight="bold"
          textAlign={["center", "left"]}
          my={0}
        >
          {organization}
        </Text>
      )}
    </Flex>
  </Flex>
);

ProfilePreview.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  jobtitle: PropTypes.string,
  organization: PropTypes.string,
  ...space.propTypes
};

ProfilePreview.defaultProps = {
  jobtitle: "",
  organization: ""
};

export default ProfilePreview;
