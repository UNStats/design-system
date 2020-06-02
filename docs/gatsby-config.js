module.exports = {
  siteMetadata: {
    title: '@UNDataForum design system',
    shortName: '@UNDataForum design system',
    description: 'Design system for @UNDataForum websites.',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
};
