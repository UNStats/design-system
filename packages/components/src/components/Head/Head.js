import React from 'react';
import Helmet from 'react-helmet';
import { bool, string } from 'prop-types';

const Head = ({ title, description, href, noRobots, url }) => (
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
  title: string.isRequired,
  description: string.isRequired,
  href: string,
  noRobots: bool,
  url: string,
};

Head.defaultProps = {
  href:
    'https://fonts.googleapis.com/css?family=Lato:400,700|Merriweather:400,700',
  noRobots: false,
};

export default Head;
