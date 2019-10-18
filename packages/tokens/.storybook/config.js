import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import '@storybook/addon-console';
import { theme } from '@undataforum/components';
import { withA11y } from '@storybook/addon-a11y';

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
addDecorator(withA11y);

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);