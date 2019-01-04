import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
import { MDXProvider } from "@mdx-js/tag";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Image } from "rebass";
import Provider from "../components/Provider";
import AlternateSiteTitle from "../components/AlternateSiteTitle";
import Badge from "../components/Badge";
import FlexList from "../components/FlexList";
import GridList from "../components/GridList";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";
import ProfilePreview from "../components/ProfilePreview";
import SiteTitle from "../components/SiteTitle";

const PreComponent = ({ children, ...props }) =>
  children.props.props && children.props.props.className === "language-jsx" ? (
    <LiveProvider
      mountStylesheet={false}
      code={children.props.children}
      scope={{
        AlternateSiteTitle,
        Badge,
        FlexList,
        GridList,
        Header,
        Image,
        PostPreview,
        ProfilePreview,
        Provider,
        SiteTitle
      }}
    >
      <LivePreview />
      <LiveError />
      <LiveEditor />
    </LiveProvider>
  ) : (
    <pre {...props}>{children}</pre>
  );

const ComponentPage = ({ children }) => (
  <Provider>
    <MDXProvider components={{ pre: PreComponent }}>{children}</MDXProvider>
  </Provider>
);

ComponentPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ComponentPage;
