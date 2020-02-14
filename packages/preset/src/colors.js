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
  // Universal pairings with Theme UI names.
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
  muted: {
    color: 'background',
    bg: 'muted',
  },
  // Universal pairings.
  default: {
    color: 'text',
    bg: 'background',
  },
  branded: {
    color: 'primary',
    bg: 'background',
  },
  // Pairings for styleguide colors.
  forumBlue: {
    color: 'background',
    bg: 'forumBlue',
  },
  blue: {
    color: 'background',
    bg: 'blue',
  },
  green: {
    color: 'background',
    bg: 'green',
  },
  red: {
    color: 'background',
    bg: 'red',
  },
  yellow: {
    color: 'background',
    bg: 'yellow',
  },
  // Pairings for additional colors.
  gray: {
    color: 'background',
    bg: 'gray',
  },
};
