import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'theme-ui';
import { withA11y } from '@storybook/addon-a11y';
import preset from '@undataforum/preset';
import merge from 'deepmerge';
import { NewTabLink } from '@undataforum/components';

const theme = merge(preset, {
  link: {
    external: NewTabLink,
  },
});

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addDecorator(withA11y);