const theme = {
  avatarSizes: {
    sm: "2rem",
    md: "4rem",
    lg: "8rem"
  },

  borders: [0, "1px solid", "2px solid", "3px solid"],

  breakpoints: ["30em", "60em"],

  colors: {
    primary: "#00609d",
    blue: "#0e6a9c",
    green: "#266f37",
    red: "#a21723",
    yellow: "#c59b25",
    gray: "#909090",
    black: "#000000",
    white: "#ffffff"
  },

  colorSchemes: {
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
  },

  // http://tachyons.io/docs/typography/scale/
  fontSizes: [
    0,
    "3rem",
    "2.25rem",
    "1.5rem",
    "1.25rem",
    "1rem",
    ".875rem",
    ".75rem"
  ],

  // http://tachyons.io/docs/layout/max-widths/
  maxWidths: [
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
  ],

  // http://tachyons.io/docs/layout/spacing/
  space: [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"],

  font: {
    sansSerif:
      "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
    serif: "georgia, times, serif"
  }
};

export default theme;
