import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ title, description, disallowRobots, url }) => (
  <Helmet title={title}>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    {url && <meta property="og:url" content={url} />}
    <meta property="og:description" content={description} />
    {disallowRobots && <meta name="robots" content="noindex,nofollow" />}
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disallowRobots: PropTypes.bool,
  url: PropTypes.string
};

Head.defaultProps = {
  disallowRobots: false,
  url: ""
};

export default Head;
