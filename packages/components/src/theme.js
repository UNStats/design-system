import { NewTabLink } from './components';
import colors from './colors';

const theme = {
  // Colors.
  colors,

  // Layout.
  breakpoints: ['30em', '60em'],
  // http://tachyons.io/docs/layout/spacing/
  space: [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],
  // http://tachyons.io/docs/layout/max-widths/
  maxWidths: [
    0,
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
    '48rem',
    '64rem',
    '96rem',
  ],

  // Typography.
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
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
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },

  // Styling.
  borders: [0, '1px solid', '2px solid', '3px solid'],
  radii: {
    none: 0,
    circle: '100%',
    pill: '9999px',
    rounded: '1rem',
  },
  // Rebass.
  Link: {
    'text-decoration': 'none',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      opacity: '0.5',
      transition: 'all 0.2s ease-in',
    },
  },

  // Configuration.
  // By default internal links are rendered using <a>.
  // This is achieved by providing `undefined` to the `as` prop of Rebass Link.
  internalLink: undefined,
  // External links by default open in a new tab.
  externalLink: NewTabLink,
};

export default theme;
