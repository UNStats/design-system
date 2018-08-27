import React from "react";
import PropTypes from "prop-types";
import { space } from "styled-system";
import { Flex } from "grid-styled";
import Anchor from "../../primitives/Anchor/Anchor";
import Avatar from "../../primitives/Avatar";
import BadgeList from "../../primitives/BadgeList";
import Heading from "../../primitives/Heading";
import { colors } from "../../theme";

const ProfileHeader = ({ Anchor: A, badges, color, img, name, ...props }) => (
  <Flex
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    {...props}
  >
    <Avatar
      alt={name}
      img={img}
      size={["md", "lg", "lg"]}
      pb={2}
      mb={[1, 2, 2]}
    />
    <Heading.h1
      fontFamily="sansSerif"
      fontSize={[5, 4, 3]}
      mt={0}
      mb={[1, 2, 3]}
      textAlign="center"
    >
      {name}
    </Heading.h1>
    {badges && <BadgeList Anchor={A} values={badges} />}
  </Flex>
);

ProfileHeader.propTypes = {
  Anchor: PropTypes.func,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.oneOf(Object.keys(colors)),
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  color: PropTypes.oneOf(Object.keys(colors)),
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ...space.propTypes
};

ProfileHeader.defaultProps = {
  Anchor,
  badges: undefined,
  color: "primary"
};

export default ProfileHeader;
