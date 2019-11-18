import preset from '@theme-ui/preset-base';
import { alpha } from '@theme-ui/color';
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
  hero: {
    color: 'primary',
    bg: alpha('background', 0.6),
  },
  transparent: {
    color: 'primary',
    background: 'transparent',
  },
  primary: {
    color: 'background',
    bg: 'primary',
  },
  secondary: {
    color: 'background',
    bg: 'secondary',
  },
  inverse: {
    color: 'background',
    bg: 'text',
  },
  accent: {
    color: 'background',
    bg: 'accent',
  },
};

// https://github.com/system-ui/theme-ui/tree/master/packages/preset-base
export default merge(preset, {
  // Compatible with https://theme-ui.com/theme-spec/#color.
  colors,
  pairings,

  // Layout.
  breakpoints: ['30em', '60em'],
  // http://tachyons.io/docs/layout/spacing/
  space: [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],
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

  fonts: {
    heading: 'system-ui, sans-serif',
  },

  // http://tachyons.io/docs/typography/scale/ (reversed)
  fontSizes: [
    '.75rem',
    '.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2.25rem',
    '3rem',
  ],

  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  // Styling.
  borders: [0, '1px solid', '2px solid', '3px solid'],

  radii: {
    default: 4,
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
    left: {
      justifyContent: 'flex-start',
    },
    center: {
      justifyContent: 'center',
    },
    right: {
      justifyContent: 'flex-end',
    },
  },

  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
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

  links: {
    branded: {
      variant: 'styles.a',
      color: pairings.branded.color,
    },
    transparent: {
      variant: 'styles.a',
      color: pairings.transparent.color,
    },
    primary: {
      variant: 'styles.a',
      color: pairings.primary.color,
    },
    secondary: {
      variant: 'styles.a',
      color: pairings.secondary.color,
    },
    inverse: {
      variant: 'styles.a',
      color: pairings.inverse.color,
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

  profilePreview: {
    left: {
      alignItems: 'flex-start',
    },
    center: {
      alignItems: 'center',
    },
    right: {
      alignItems: 'flex-end',
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
