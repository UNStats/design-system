import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'theme-ui';
import { withA11y } from '@storybook/addon-a11y';
import { Global } from '@emotion/core';
import preset from '@undataforum/preset';
import merge from 'deepmerge';

// eslint-disable-next-line shopify/strict-component-boundaries
import { NewTabLink } from '../../src/components';

const theme = merge(preset, {
  link: {
    external: NewTabLink,
  },
});

addParameters({
  options: {
    panelPosition: 'bottom',
    // In v5.3.3 the sort order for stories is broken. This custom sort function fixes it.
    // https://storybook.js.org/docs/configurations/options-parameter/#sorting-stories
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <Global
        styles={{
          body: { margin: 0 },
        }}
      />
      {story()}
    </>
  </ThemeProvider>
));

addDecorator(withA11y);
