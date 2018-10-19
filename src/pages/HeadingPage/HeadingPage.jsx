import React from "react";
import PropTypes from "prop-types";
import { Text } from "rebass";
import Page from "../Page";

const HeadingPage = ({ title, description, children }) => (
  <Page title={title} description={description}>
    <Text as="h1" mb={4}>
      {title}
    </Text>
    {children}
  </Page>
);

HeadingPage.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default HeadingPage;
