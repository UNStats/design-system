import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src';
import '@storybook/addon-console';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

function loadStories() {
  // Components.
  let req = require.context('../../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // Tokens.
  req = require.context('../../src/tokens', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
