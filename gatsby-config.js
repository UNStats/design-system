const pkg = require("./package.json");

module.exports = {
  siteMetadata: {
    title: pkg.name,
    siteUrl: pkg.homepage,
    sidebar: {
      pages: [
        {
          slug: "/about",
          title: "about"
        }
      ]
    }
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-mdx`,

      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/templates/ComponentPage.jsx")
        }
      }
    }
  ]
};
