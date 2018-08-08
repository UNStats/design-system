import React from "react";
import styled from "styled-components";
import {
  alignItems,
  borders,
  borderColor,
  flexDirection,
  fontSize,
  space,
  textAlign
} from "styled-system";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import { anchorStyle } from "../../style";

const Wrapper = styled.article`
  ${anchorStyle};
  ${borders};
  ${borderColor};
  ${space};
  &:last-child {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Preview = styled.div`
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

const ProfilePreview = ({
  anchor,
  color,
  href,
  img,
  jobtitle,
  name,
  organization,
  ...props
}) => (
  <Wrapper borderColor={color} borderBottom="2px solid" {...props}>
    {anchor({
      href,
      children: (
        <Preview flexDirection={["column", "row"]} pb={3}>
          <Avatar
            alt={name}
            img={img}
            size={["md", "md", "lg"]}
            mb={2}
            mr={[0, 3]}
          />
          <Description alignItems={["center", "flex-start"]}>
            <Name fontSize={3} textAlign={["center", "left"]} mt={0} mb={2}>
              {name}
            </Name>
            {jobtitle && (
              <Jobtitle
                fontSize={5}
                textAlign={["center", "left"]}
                mt={0}
                mb={1}
              >
                {jobtitle}
              </Jobtitle>
            )}
            {organization && (
              <Organization fontSize={5} textAlign={["center", "left"]} my={0}>
                {organization}
              </Organization>
            )}
          </Description>
        </Preview>
      )
    })}
  </Wrapper>
);

ProfilePreview.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  jobtitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string
};

ProfilePreview.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "primary",
  jobtitle: "",
  organization: ""
};

export default ProfilePreview;
