import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "rebass";
import ProfileList from "../ProfileList";

const PostPreview = ({ title, date, authors, lead, link, ...props }) => (
  <Flex {...props} flexDirection="column">
    <Text as="h1" fontFamily="sans" lineHeight="title" mt={0} mb={3}>
      {title}
    </Text>
    <ProfileList align="left" link={link} values={authors} width={96} mb={3} />
    <Text as="time" css={{ display: "block" }} fontFamily="sans" mb={3}>
      {date}
    </Text>
    {lead && (
      <Text as="p" fontFamily="serif" lineHeight="copy" my={0}>
        {lead}
      </Text>
    )}
  </Flex>
);

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ).isRequired,
  lead: PropTypes.string,
  /** Use this link to link authors. */
  link: PropTypes.func
};

PostPreview.defaultProps = {
  lead: undefined,
  link: undefined
};

export default PostPreview;
