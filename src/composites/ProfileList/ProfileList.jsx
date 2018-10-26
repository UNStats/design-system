import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "styled-system";
import { Link } from "rebass";
import GridList from "../GridList";
import ProfilePreview from "../ProfilePreview";

const ProfileList = ({
  align,
  fontSize,
  gap,
  link,
  values,
  width,
  ...props
}) => (
  <GridList
    {...props}
    align={align}
    gap={gap}
    render={({ href, ...profile }) => {
      if (href) {
        return (
          <Link as={link} href={href}>
            <ProfilePreview {...profile} align={align} fontSize={fontSize} />
          </Link>
        );
      }
      return <ProfilePreview {...profile} align={align} fontSize={fontSize} />;
    }}
    values={values}
    width={width}
  />
);

ProfileList.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  /** Font size of name (if displayed). */
  fontSize: ProfilePreview.propTypes.fontSize,
  gap: GridList.propTypes.gap,
  /** Use this link to link profiles. */
  link: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProfilePreview.propTypes,
      href: PropTypes.string
    })
  ).isRequired,
  width: propTypes.responsive.isRequired
};

ProfileList.defaultProps = {
  align: "center",
  fontSize: 1,
  gap: 2,
  link: undefined
};

export default ProfileList;
