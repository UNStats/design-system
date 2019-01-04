import NewTabLink from "./components/NewTabLink";

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
  sans: "Lato, sans-serif",
  serif: "Merriweather, serif"
};

// http://tachyons.io/docs/typography/scale/ (reversed)
const fontSizes = [
  ".75rem",
  ".875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2.25rem",
  "3rem"
];

const fontWeights = {
  normal: 400,
  bold: 700
};

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};

const radii = {
  none: 0,
  circle: "100%",
  pill: "9999px",
  rounded: "1rem"
};

// http://tachyons.io/docs/layout/spacing/
const space = [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"];

// This theme prop adds styling to Rebass Link.
const Link = {
  height: "100%",
  "text-decoration": "none",
  transition: "all 0.2s ease-out",
  "&:hover": {
    opacity: "0.5",
    transition: "all 0.2s ease-in"
  }
};

// By default internal links are rendered using <a>.
// This is achieved by providing `undefined` to the `as` prop of Rebass Link.
const internalLink = undefined;

// External links by default open in a new tab.
const externalLink = NewTabLink;

const theme = {
  borders,
  breakpoints,
  colors,
  colorSchemes,
  externalLink,
  fonts,
  fontSizes,
  fontWeights,
  internalLink,
  lineHeights,
  radii,
  space,
  Link
};

export default theme;
