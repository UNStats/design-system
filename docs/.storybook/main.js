module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // Sequence of addons is respected only when adding /register to knobs.
    '@storybook/addon-knobs/register',
  ],
};
