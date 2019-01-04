import React from "react";
import PropTypes from "prop-types";
import { Heading } from "rebass";
import TextPage from "./TextPage";

const HeadingPage = ({ title, description, children }) => (
  <TextPage title={title} description={description}>
    <Heading
      as="h1"
      fontFamily="sans"
      fontSize={[4, 5]}
      lineHeight="solid"
      mb={[2, 3]}
    >
      {title}
    </Heading>
    {children}
  </TextPage>
);

HeadingPage.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default HeadingPage;
