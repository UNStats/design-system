const avatarSizes = {
  sm: "2rem",
  md: "4rem",
  lg: "8rem"
};

const borders = [0, "1px solid", "2px solid", "3px solid"];

const breakpoints = ["30em", "60em"];

export const colors = {
  primary: "#00609d",
  blue: "#0e6a9c",
  green: "#266f37",
  red: "#a21723",
  yellow: "#c59b25",
  gray: "#909090",
  black: "#000000",
  white: "#ffffff"
};

export const colorSchemes = {
  primary: {
    backgroundColor: "primary",
    color: "white"
  },
  blue: {
    backgroundColor: "blue",
    color: "white"
  },
  green: {
    backgroundColor: "green",
    color: "white"
  },
  red: {
    backgroundColor: "red",
    color: "white"
  },
  yellow: {
    backgroundColor: "yellow",
    color: "black"
  },
  gray: {
    backgroundColor: "gray",
    color: "black"
  },
  black: {
    backgroundColor: "black",
    color: "white"
  },
  white: {
    backgroundColor: "white",
    color: "black"
  }
};

const fonts = {
  sansSerif:
    "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
  serif: "georgia, times, serif"
};

// http://tachyons.io/docs/typography/scale/
const fontSizes = [
  0,
  "3rem",
  "2.25rem",
  "1.5rem",
  "1.25rem",
  "1rem",
  ".875rem",
  ".75rem"
];

// https://tachyons.io/docs/layout/heights/
const heights = [0, "1rem", "2rem", "4rem", "8rem"];

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};

// http://tachyons.io/docs/layout/max-widths/
const maxWidths = [
  0,
  "1rem",
  "2rem",
  "4rem",
  "8rem",
  "16rem",
  "32rem",
  "48rem",
  "64rem",
  "96rem"
];

// http://tachyons.io/docs/layout/spacing/
const space = [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"];

// http://tachyons.io/docs/layout/widths/
const widths = [0, "1rem", "2rem", "4rem", "8rem", "16rem"];

const theme = {
  avatarSizes,
  borders,
  breakpoints,
  colors,
  colorSchemes,
  fonts,
  fontSizes,
  heights,
  lineHeights,
  maxWidths,
  space,
  widths
};

export default theme;
