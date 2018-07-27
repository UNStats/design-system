import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, space } from "styled-system";
import NameTag from "../NameTag";
import Badge from "../Badge";
import BadgeList from "../BadgeList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${fontFamily};
  ${space};
`;

const ProfileHeader = ({ anchor, badges, color, img, name, ...props }) => (
  <Wrapper fontFamily="sansSerif" {...props}>
    <NameTag name={name} img={img} color={color} mb={[1, 2, 3]} />
    {badges && <BadgeList anchor={anchor} values={badges} />}
  </Wrapper>
);

ProfileHeader.propTypes = {
  anchor: PropTypes.func,
  badges: PropTypes.arrayOf(PropTypes.shape({ ...Badge.propTypes })),
  color: NameTag.propTypes.color,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  /** Adjust spacing. */
  ...space.propTypes
};

ProfileHeader.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "primary"
};

export default ProfileHeader;
