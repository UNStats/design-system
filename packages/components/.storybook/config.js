import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src';
import '@storybook/addon-console';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
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

function loadStories() {
  // Components.
  let req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // Icons.
  req = require.context('../src/icons', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
