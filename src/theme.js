// Color palette.
const primary = "#00609d";
const blue = "#0e6a9c";
const green = "#266f37";
const red = "#a21723";
const yellow = "#c59b25";
const gray = "#909090";
const black = "#000000";
const white = "#ffffff";

const borders = [0, "1px solid", "2px solid", "3px solid"];

const breakpoints = ["30em", "60em"];

export const colors = {
  text: black,
  background: white,
  primary,
  blue,
  green,
  red,
  yellow,
  gray,
  black,
  white
};

export const colorSchemes = {
  primary: {
    bg: "primary",
    color: "white"
  },
  blue: {
    bg: "blue",
    color: "white"
  },
  green: {
    bg: "green",
    color: "white"
  },
  red: {
    bg: "red",
    color: "white"
  },
  yellow: {
    bg: "yellow",
    color: "black"
  },
  gray: {
    bg: "gray",
    color: "black"
  },
  black: {
    bg: "black",
    color: "white"
  },
  white: {
    bg: "white",
    color: "black"
  }
};

export const fonts = {
  sans: "Nunito, sans-serif",
  serif: "Lora, serif"
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

const fontWeights = {
  normal: 400,
  bold: 700
};

// https://tachyons.io/docs/layout/heights/
const heights = [0, "1rem", "2rem", "4rem", "8rem"];

export const lineHeights = {
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

const radii = {
  none: 0,
  circle: "100%",
  pill: "9999px",
  rounded: "1rem"
};

// http://tachyons.io/docs/layout/spacing/
const space = [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"];

// http://tachyons.io/docs/layout/widths/
const widths = [0, "1rem", "2rem", "4rem", "8rem", "16rem"];

const Link = {
  height: "100%",
  "text-decoration": "none",
  transition: "all 0.2s ease-out",
  "&:hover": {
    opacity: "0.5",
    transition: "all 0.2s ease-in"
  }
};

const theme = {
  borders,
  breakpoints,
  colors,
  colorSchemes,
  fonts,
  fontSizes,
  fontWeights,
  heights,
  lineHeights,
  maxWidths,
  radii,
  space,
  widths,
  Link
};

export default theme;
