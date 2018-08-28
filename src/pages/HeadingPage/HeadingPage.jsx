import React from "react";
import PropTypes from "prop-types";
import Heading from "../../primitives/Heading";
import Page from "../Page";

const HeadingPage = ({ title, description, children }) => (
  <Page title={title} description={description}>
    <Heading.h1 mb={4}>{title}</Heading.h1>
    {children}
  </Page>
);

HeadingPage.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default HeadingPage;
