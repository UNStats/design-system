import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Container from "../../helpers/Container";

const Page = ({ children, description, pageTitle, siteTitle }) => (
  <Container maxWidth={7} mt={[3, 4]} mb={[3, 4]}>
    <Helmet
      title={`${pageTitle} | ${siteTitle}`}
      meta={[{ property: "og:description", content: description }]}
    />
    {children}
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired
};

export default Page;
