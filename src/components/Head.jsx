import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({
  title,
  description,
  href = 'https://fonts.googleapis.com/css?family=Lato:400,700|Merriweather:400,700',
  noRobots = false,
  url = '',
}) => (
  <Helmet title={title}>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    {url && <meta property="og:url" content={url} />}
    <meta property="og:description" content={description} />
    {noRobots && <meta name="robots" content="noindex,nofollow" />}
    <link href={href} rel="stylesheet" />
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  noRobots: PropTypes.bool,
  url: PropTypes.string,
};

export default Head;
