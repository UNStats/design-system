import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import NameTag from "../NameTag";
import Badge from "../Badge";
import BadgeList from "../BadgeList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space};
`;

const ProfileHeader = ({ name, img, color, badges, ...props }) => (
  <Wrapper {...props}>
    <NameTag name={name} img={img} color={color} mb={[1, 2, 3]} />
    {badges && <BadgeList values={badges} />}
  </Wrapper>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: NameTag.propTypes.color,
  badges: PropTypes.arrayOf(PropTypes.shape({ ...Badge.propTypes })),
  /** Adjust spacing. */
  ...space.propTypes
};

ProfileHeader.defaultProps = {
  color: "primary"
};

export default ProfileHeader;
