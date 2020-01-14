import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

addDecorator(withA11y);
