import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@theme-ui/components';

storiesOf('Components/Button', module)
  .add('default', () => <Button m={2}>default (primary)</Button>)
  .add('secondary', () => (
    <Button variant="secondary" m={2}>
      secondary
    </Button>
  ))
  .add('outline', () => (
    <Button variant="outline" m={2}>
      outline (primary)
    </Button>
  ));
