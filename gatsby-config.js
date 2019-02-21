const pkg = require("./package.json");

module.exports = {
  __experimentalThemes: ["gatsby-theme-undataforum"],
  siteMetadata: {
    title: pkg.name,
    description: pkg.description
  }
};
