import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from '@theme-ui/components';

import Badge from './Badge';

storiesOf('Components/Badge', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Box sx={{ fontFamily: 'body', m: 2 }}>
      <Badge
        color="background"
        bg={select('bg', ['primary', 'secondary', 'accent'], 'primary')}
      >
        custom
      </Badge>
    </Box>
  ))
  .add('outline', () => (
    <Box sx={{ fontFamily: 'body', m: 2 }}>
      <Badge
        color={select('color', ['primary', 'secondary', 'accent'], 'primary')}
        bg="background"
        variant="outline"
      >
        outline
      </Badge>
    </Box>
  ));
