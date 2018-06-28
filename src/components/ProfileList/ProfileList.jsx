import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import ProfileCard from "../ProfileCard";
import theme from "../theme";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: ${props => props.theme.space[3]};
  justify-items: center;
  ${space};
`;

const ProfileList = ({ color, profiles, render, ...props }) => (
  <Grid {...props}>
    {profiles.map(({ name, jobtitle, organization, img, href, slug }) => (
      <ProfileCard
        name={name}
        jobtitle={jobtitle}
        organization={organization}
        img={img}
        color={color}
        href={href}
        render={render}
        key={slug}
      />
    ))}
  </Grid>
);

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({ ...ProfileCard.propTypes })),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  render: PropTypes.func
};

export default ProfileList;
