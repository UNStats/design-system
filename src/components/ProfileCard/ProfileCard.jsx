import React from "react";
import styled from "styled-components";
import { border, borderColor, fontSize, space, width } from "styled-system";
import PropTypes from "prop-types";
import NameTag from "../NameTag";
import theme from "../theme";

const affiliate = (jobtitle, organization) => {
  if (jobtitle && organization) {
    return `${jobtitle} (${organization})`;
  } else if (jobtitle) {
    return `${jobtitle}`;
  } else if (organization) {
    return `${organization}`;
  }
  return "";
};

const Wrapper = styled.article`
  display: inline-block;
  max-width: ${props => props.theme.maxWidths[6]};
  a {
    display: block;
    color: inherit;
    height: 100%;
    text-decoration: none;
  }
  ${width};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  border-radius: ${props => props.theme.space[3]};
  ${border};
  ${borderColor};
  ${space};
`;

const Affiliation = styled.h2`
  text-align: center;
  font-weight: normal;
  ${fontSize};
  ${space};
`;

const ProfileCard = ({
  name,
  jobtitle,
  organization,
  img,
  color,
  href,
  render,
  ...props
}) => {
  const affiliation = affiliate(jobtitle, organization);
  return (
    <Wrapper w={1}>
      {render(
        href,
        <Card border={1} borderColor="gray" p={[2, 3]} {...props}>
          <NameTag name={name} img={img} color={color} mb={[1, 2, 2]} />
          {affiliation && (
            <Affiliation fontSize={[6, 5, 4]} my={0}>
              {affiliation}
            </Affiliation>
          )}
        </Card>
      )}
    </Wrapper>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  jobtitle: PropTypes.string,
  organization: PropTypes.string,
  img: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  href: PropTypes.string.isRequired,
  render: PropTypes.func
};

ProfileCard.defaultProps = {
  color: "primary",
  render: (href, text) => <a href={href}>{text}</a>
};

export default ProfileCard;
