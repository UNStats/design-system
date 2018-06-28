import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import NameTag from "../NameTag";
import BadgeList from "../BadgeList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space};
`;

const ProfileHeader = ({ name, color, badges, img, ...props }) => (
  <Wrapper p={1}>
    <NameTag name={name} img={img} color={color} mb={[1, 2, 3]} />
    {badges.length > 0 && <BadgeList badges={badges} />}
  </Wrapper>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: NameTag.propTypes.color,
  badges: BadgeList.propTypes.badges
};

ProfileHeader.defaultProps = {
  color: "primary",
  badges: []
};

export default ProfileHeader;
