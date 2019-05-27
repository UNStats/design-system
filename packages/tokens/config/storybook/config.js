import { configure, addParameters } from '@storybook/react';
import '@storybook/addon-console';
import storybookTheme from './theme';

addParameters({
  options: {
    panelPosition: 'bottom',
    theme: storybookTheme,
  },
});

function loadStories() {
  const req = require.context('../../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
