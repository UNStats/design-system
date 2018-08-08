import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ description, index, title, url }) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={description} />
      {!index && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
};

Head.propTypes = {
  description: PropTypes.string.isRequired,
  /** Set to false to discourage indexing by search engines. */
  index: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

Head.defaultProps = {
  index: true
};

export default Head;
