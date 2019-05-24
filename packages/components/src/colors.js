// Universal colors.
const black = '#000000';
const white = '#ffffff';
const gray = '#eee';

// Styleguide colors.
const forumBlue = '#00609d';
const blue = '#0e6a9c';
const green = '#266f37';
const red = '#a21723';
const yellow = '#c59b25';

// Abstractions.
const primary = forumBlue;
const secondary = gray;

const colors = {
  text: black,
  background: white,
  primary,
  secondary,
  blue,
  green,
  red,
  yellow,
  modes: {
    primary: {
      text: white,
      background: primary,
    },
    secondary: {
      text: black,
      background: secondary,
    },
    blue: {
      text: white,
      background: blue,
    },
    green: {
      text: white,
      background: green,
    },
    red: {
      text: white,
      background: red,
    },
    yellow: {
      text: black,
      background: yellow,
    },
  },
};

export default colors;
