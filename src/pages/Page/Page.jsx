import React from "react";
import PropTypes from "prop-types";
import Container from "../../helpers/Container";
import Head from "../../helpers/Head";

const Page = ({ title, description, children }) => (
  <Container maxWidth={7} mt={[3, 4]} mb={[3, 4]}>
    <Head title={title} description={description} />
    {children}
  </Container>
);

Page.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Page;
