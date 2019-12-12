import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Text } from '@theme-ui/components';

storiesOf('Components/Container', module).add('all widths', () => (
  <>
    <Container
      sx={{
        maxWidth: 'width.narrow',
        color: 'background',
        bg: 'primary',
        my: 2,
      }}
    >
      <Text sx={{ fontFamily: 'body' }}>narrow</Text>
    </Container>
    <Container
      sx={{
        maxWidth: 'width.default',
        color: 'background',
        bg: 'primary',
        my: 2,
      }}
    >
      <Text sx={{ fontFamily: 'body' }}>default</Text>
    </Container>
    <Container
      sx={{ maxWidth: 'width.wide', color: 'background', bg: 'primary', my: 2 }}
    >
      <Text sx={{ fontFamily: 'body' }}>wide</Text>
    </Container>
  </>
));
