import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, fontSize, space } from "styled-system";
import Avatar from "../Avatar";
import Badge from "../Badge";
import BadgeList from "../BadgeList";

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

const ProfileHeader = ({ anchor, badges, color, img, name, ...props }) => (
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
    {badges && <BadgeList anchor={anchor} values={badges} />}
  </Wrapper>
);

ProfileHeader.propTypes = {
  anchor: PropTypes.func,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      href: Badge.propTypes.href,
      text: PropTypes.string,
      color: Badge.propTypes.color
    })
  ),
  color: Avatar.propTypes.color,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  /** Adjust spacing. */
  ...space.propTypes
};

ProfileHeader.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  badges: undefined,
  color: "primary"
};

export default ProfileHeader;
