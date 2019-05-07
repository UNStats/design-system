import { themeGet } from 'styled-system';

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

// Additional logo colors.
const lightBlue = '#5480AC';
const lightGreen = '#588555';
const lightRed = '#C57868';
const lightYellow = '#d7b970';

// Abstractions.
const primary = forumBlue;
const secondary = gray;

// Color functions for design tokens.
export const blueByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : blue;
export const lightBlueByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : lightBlue;

export const greenByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : green;
export const lightGreenByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : lightGreen;

export const redByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : red;
export const lightRedByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : lightRed;

export const yellowByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : yellow;
export const lightYellowByDefault = (color, props) =>
  color ? themeGet(`colors.${color}`)(props) : lightYellow;

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
