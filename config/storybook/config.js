import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../src';
import '@storybook/addon-console';
import storybookTheme from './theme';

addParameters({
  options: {
    panelPosition: 'bottom',
    theme: storybookTheme,
  },
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));

function loadStories() {
  // Components.
  let req = require.context('../../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // Tokens.
  req = require.context('../../src/tokens', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
