import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  alignItems,
  flexDirection,
  fontSize,
  space,
  textAlign
} from "styled-system";
import Avatar from "../../helpers/Avatar";

const Wrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${flexDirection};
  ${alignItems};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  ${alignItems};
`;

const Name = styled.h1`
  ${fontSize};
  ${space};
  ${textAlign};
`;

const Jobtitle = styled.h2`
  font-weight: normal;
  ${fontSize};
  ${space};
  ${textAlign};
`;

const Organization = styled.h2`
  ${fontSize};
  ${space};
  ${textAlign};
`;

const ProfilePreview = ({ img, jobtitle, name, organization }) => (
  <Wrapper flexDirection={["column", "row"]} pb={3}>
    <Avatar alt={name} img={img} size={["md", "md", "lg"]} mb={2} mr={[0, 3]} />
    <Description alignItems={["center", "flex-start"]}>
      <Name fontSize={3} textAlign={["center", "left"]} mt={0} mb={2}>
        {name}
      </Name>
      {jobtitle && (
        <Jobtitle fontSize={5} textAlign={["center", "left"]} mt={0} mb={1}>
          {jobtitle}
        </Jobtitle>
      )}
      {organization && (
        <Organization fontSize={5} textAlign={["center", "left"]} my={0}>
          {organization}
        </Organization>
      )}
    </Description>
  </Wrapper>
);

ProfilePreview.propTypes = {
  img: PropTypes.string.isRequired,
  jobtitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string
};

ProfilePreview.defaultProps = {
  jobtitle: "",
  organization: ""
};

export default ProfilePreview;
