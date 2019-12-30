import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

import { NewTabLink } from './components';

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
export const colors = {
  text: black,
  background: white,
  primary: blue,
  secondary: green,
  accent: red,
  muted: gray,
};

// Color pairings optimized for contrast.
const pairings = {
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

// Defaults from @theme-ui/preset-base:
// https://github.com/system-ui/theme-ui/tree/master/packages/preset-base
export default merge(preset, {
  // Compatible with https://theme-ui.com/theme-spec/#color.
  colors,
  pairings,

  // Layout.
  breakpoints: ['30em', '60em'],
  sizes: {
    width: {
      narrow: '48rem',
      default: '64rem',
      wide: '96rem',
    },
    height: {
      small: 32,
      medium: 64,
      large: 128,
    },
  },

  // Override heading: 'inherit' from preset-base.
  fonts: {
    heading: 'system-ui, sans-serif',
  },

  // Styling.
  borders: [0, '1px solid', '2px solid', '3px solid'],

  radii: {
    default: 0,
    circle: 99999,
  },

  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: '0 0 0 2px inset',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },

  badges: {
    outline: {
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  cards: {
    primary: {
      padding: 2,
      borderRadius: 'default',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },

  // Corner case: transparent variant for navigation means normal backgorund color.
  navigation: {
    branded: pairings.branded,
    transparent: { color: 'primary', bg: 'background' },
    primary: pairings.primary,
  },

  link: {
    // Default internal link: normal link element.
    internal: 'a',
    // Default external link: open in new tab.
    external: NewTabLink,
  },

  // The following styles are required for links in Header and Footer.
  links: {
    branded: {
      variant: 'styles.a',
      color: pairings.branded.color,
    },
    primary: {
      variant: 'styles.a',
      color: pairings.primary.color,
    },
    secondary: {
      variant: 'styles.a',
      color: pairings.secondary.color,
    },
  },

  names: {
    default: {
      fontWeight: 'body',
    },
    bold: {
      fontWeight: 'bold',
    },
  },

  styles: {
    a: {
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
  },
});
