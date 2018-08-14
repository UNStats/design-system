import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, fontSize, space } from "styled-system";
import DefaultAnchor from "../DefaultAnchor";
import Avatar from "../../helpers/Avatar";
import BadgeList from "../../helpers/BadgeList";
import { colors } from "../../theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${fontFamily};
  ${space};
`;

const Name = styled.h1`
  text-align: center;
  ${fontSize};
  ${space};
`;

const ProfileHeader = ({ Anchor, badges, color, img, name, ...props }) => (
  <Wrapper fontFamily="sansSerif" {...props}>
    <Avatar
      alt={name}
      img={img}
      size={["md", "lg", "lg"]}
      border={3}
      borderColor={color}
      p={2}
      mb={[1, 2, 2]}
    />
    <Name fontSize={[5, 4, 3]} mt={0} mb={[1, 2, 3]}>
      {name}
    </Name>
    {badges && <BadgeList Anchor={Anchor} values={badges} />}
  </Wrapper>
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
  Anchor: DefaultAnchor,
  badges: undefined,
  color: "primary"
};

export default ProfileHeader;
