import colors, { pairings } from './colors';

const theme = {
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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography.
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  // Colors.
  colors,
  pairings,

  // Styling.
  borders: [0, '1px solid', '2px solid', '3px solid'],

  radii: {
    default: 0,
    circle: 99999,
  },

  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },

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

  // You can use different components to render internal and external links.
  link: {
    internal: 'a',
    external: 'a',
  },

  links: {
    // Default link styling with primary color.
    primary: {
      variant: 'styles.a',
      color: 'primary',
    },
    secondary: {
      variant: 'styles.a',
      color: 'secondary',
    },
    inherit: {
      variant: 'styles.a',
      color: 'inherit',
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

  // Styles for styling Markdown and Styled from Theme UI.
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      mt: 0,
      mb: 4,
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      mt: 0,
      mb: 3,
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      mt: 0,
      mb: 2,
    },
    h4: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
      mt: 0,
      mb: 2,
    },
    h5: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
      mt: 0,
    },
    h6: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
      mt: 0,
      mb: 2,
    },
    // The description in EventPreview is rendered with MDX.
    // The result will have the styles below.
    // If color was set to 'text' then description would render in text color in promobox on homepage.
    // Therefore set color to 'inherit' to let parent determine color.
    p: {
      color: 'inherit',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      mt: 0,
      mb: 3,
      '&:last-child': {
        mb: 0,
      },
    },
    a: {
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export default theme;
