import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import Page from "../Page";

const TextPage = ({ title, description, children }) => (
  <Page title={title} description={description}>
    <Box as="main" css={{ maxWidth: "48rem" }} mx="auto">
      {children}
    </Box>
  </Page>
);

TextPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default TextPage;
