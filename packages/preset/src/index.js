import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

// Universal colors.
const black = '#000';
const white = '#FFF';
const gray = '#717171';

// Styleguide colors.
const forumBlue = '#00609D';
const blue = '#0E6A9C';
const green = '#266F37';
const red = '#A21723';
const yellow = '#C59B25';

const theme = merge(preset, {
  // Breakpoints.
  breakpoints: ['30em', '60em'],

  // Typography.

  // fonts: from @theme-ui/preset-base.

  // fontSizes: from @theme-ui/preset-base.

  // fontWeights: from @theme-ui/preset-base.

  // lineHeights: from @theme-ui/preset-base.

  // Starting with theme-ui 0.4.0, Text will support variants under text key: https://theme-ui.com/components/text.
  // In theme-ui 0.3.x, the default variant needs to be referenced with 'text.default'.
  // In theme-ui 0.4.0 the default variant does not need to referenced at all.
  text: {
    default: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
    },
  },

  // Colors.

  // Color abstractions.
  colors: {
    // Theme UI colors.
    text: black,
    background: white,
    primary: blue,
    secondary: green,
    accent: red,
    muted: gray,
    // Style guide colors.
    forumBlue,
    blue,
    green,
    red,
    yellow,
    // Additional colors.
    gray,
  },

  // Styling.

  borders: [0, '1px solid', '2px solid', '3px solid'],

  radii: {
    default: 0,
    circle: 99999,
  },

  // Variants that can be applied via variant prop.

  // Variants for https://theme-ui.com/components/badge/.
  badges: {
    default: {
      borderRadius: 'default',
    },
    primary: {
      color: 'background',
      bg: 'primary',
      variant: 'badges.default',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      variant: 'badges.default',
    },
  },

  // Variants for https://theme-ui.com/components/button.
  buttons: {
    default: {
      fontSize: 2,
      fontWeight: 'bold',
      borderRadius: 'default',
    },
    primary: {
      variant: 'buttons.default',
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      variant: 'buttons.default',
      color: 'background',
      bg: 'secondary',
    },
    outline: {
      default: {
        variant: 'buttons.default',
        boxShadow: '0 0 0 2px inset',
        // Override default `bg: 'primary'` from Theme UI's Button.
        bg: 'inherit',
      },
      primary: {
        variant: 'buttons.outline.default',
        color: 'primary',
      },
      secondary: {
        variant: 'buttons.outline.default',
        color: 'secondary',
      },
    },
  },

  'event-preview': {
    badge: {
      variant: 'badges.primary',
    },
    buttons: {
      event: {
        variant: 'buttons.primary',
      },
      registration: {
        variant: 'buttons.outline.primary',
      },
    },
  },

  // Variants for https://theme-ui.com/components/container.
  layout: {
    container: {
      px: [2, 3, 4],
      maxWidth: '64rem',
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: '48rem',
    },
    wide: {
      variant: 'layout.container',
      maxWidth: '96rem',
    },
  },

  // Customizations.

  // Customize https://design-system.undataforum.org/components/footer.
  footer: {
    bg: 'primary',
  },

  // Customize https://design-system.undataforum.org/components/header.
  header: {
    color: 'primary',
    bg: 'background',
    container: {
      variant: 'layout.wide',
    },
    nav: {
      bg: 'background',
    },
    cta: { variant: 'buttons.outline.primary' },
  },

  // Variants for https://design-system.undataforum.org/components/names.
  names: {
    default: {
      fontWeight: 'body',
    },
    bold: {
      fontWeight: 'bold',
    },
  },

  'post-preview': {
    badge: {
      variant: 'badges.primary',
    },
    button: {
      variant: 'buttons.primary',
    },
  },

  // Styles for styling Markdown and Styled from Theme UI.
  styles: {
    // root: from @theme-ui/preset-base.
    h1: {
      // Deep merge with h1 from @theme-ui/preset-base.
      mt: 0,
      mb: 4,
    },
    h2: {
      // Deep merge with h2 from @theme-ui/preset-base.
      mt: 0,
      mb: 3,
    },
    h3: {
      // Deep merge with h3 from @theme-ui/preset-base.
      mt: 0,
      mb: 2,
    },
    h4: {
      // Deep merge with h4 from @theme-ui/preset-base.
      mt: 0,
      mb: 2,
    },
    h5: {
      // Deep merge with h5 from @theme-ui/preset-base.
      mt: 0,
      mb: 2,
    },
    h6: {
      // Deep merge with h6 from @theme-ui/preset-base.
      mt: 0,
      mb: 2,
    },
    p: {
      // Deep merge with p from @theme-ui/preset-base.
      // MDX paragraphs are rendered with these styles.
      // Set color to inherit to allow adapting to parent text color.
      color: 'inherit',
      mt: 0,
      mb: 3,
      '&:last-child': {
        mb: 0,
      },
    },
    a: {
      // Deep merge with a from @theme-ui/preset-base.
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
    // pre: from @theme-ui/preset-base.
    // code: from @theme-ui/preset-base.
    // table: from @theme-ui/preset-base.
    // th: from @theme-ui/preset-base.
    // td: from @theme-ui/preset-base.
    // img: from @theme-ui/preset-base.
  },
});

export default theme;
