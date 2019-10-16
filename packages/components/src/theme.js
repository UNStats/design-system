import preset from '@rebass/preset';
import merge from 'lodash.merge';
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
  inverse: {
    color: 'background',
    bg: 'text',
  },
  branded: {
    color: 'primary',
    bg: 'background',
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
  accent: {
    color: 'background',
    bg: 'accent',
  },
  muted: {
    color: 'text',
    bg: 'muted',
  },
};

// https://github.com/rebassjs/rebass/blob/master/packages/preset/src/index.js.
export default merge(preset, {
  // Compatible with https://theme-ui.com/theme-spec/#color.
  colors,

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
    logo: {
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

  // Styling.
  borders: [0, '1px solid', '2px solid', '3px solid'],

  buttons: {
    outline: {
      boxShadow: '0 0 0 2px inset',
    },
  },

  badge: {
    primary: pairings.primary,
    secondary: pairings.secondary,
    accent: pairings.accent,
    inverse: pairings.inverse,
  },

  header: {
    branded: pairings.branded,
    transparent: pairings.transparent,
    primary: pairings.primary,
  },

  footer: {
    primary: pairings.primary,
    secondary: pairings.secondary,
    inverse: pairings.inverse,
  },

  variants: {
    // Default variant for Link.
    link: {
      textDecoration: 'none',
      transition: 'all 0.2s ease-out',
      '&:hover': {
        opacity: '0.5',
        transition: 'all 0.2s ease-in',
      },
    },
  },

  links: {
    // Default internal links are just normal link elements.
    internal: 'a',
    // Default external links open in new tab.
    external: NewTabLink,
  },
});
