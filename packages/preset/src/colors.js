// Compatible with https://theme-ui.com/theme-spec/#color.

// Universal colors.
const black = '#000000';
const white = '#ffffff';
const gray = '#eee';

// Styleguide colors.
// const forumBlue = '#00609d';
const blue = '#0e6a9c';
const green = '#266f37';
const red = '#a21723';
// const yellow = '#c59b25';

// Abstractions.
const colors = {
  text: black,
  background: white,
  primary: blue,
  secondary: green,
  accent: red,
  muted: gray,
};

export default colors;

// Color pairings optimized for contrast.
export const pairings = {
  default: {
    color: 'text',
    bg: 'background',
  },
  branded: {
    color: 'primary',
    bg: 'background',
  },
  primary: {
    color: 'background',
    bg: 'primary',
  },
  secondary: {
    color: 'background',
    bg: 'secondary',
  },
  accent: {
    color: 'background',
    bg: 'accent',
  },
};
