// Compatible with https://theme-ui.com/theme-spec/#color.

// Universal colors.
const black = '#000000';
const white = '#ffffff';
const gray = '#717171';

// Styleguide colors.
const forumBlue = '#00609d';
const blue = '#0e6a9c';
const green = '#266f37';
const red = '#a21723';
const yellow = '#c59b25';

// Abstractions.
const colors = {
  // Theme UI colors.
  text: black,
  background: white,
  primary: blue,
  secondary: green,
  accent: red,
  muted: gray,
  // Style guide colors.
  forumBlue,
  blue,
  green,
  red,
  yellow,
  // Additional colors.
  gray,
};

export default colors;

// Color pairings optimized for contrast.
export const pairings = {
  primary: {
    color: 'primary',
    bg: 'background',
  },
  'primary-inverse': {
    color: 'background',
    bg: 'primary',
  },
  secondary: {
    color: 'secondary',
    bg: 'background',
  },
  'secondary-inverse': {
    color: 'background',
    bg: 'secondary',
  },
};
