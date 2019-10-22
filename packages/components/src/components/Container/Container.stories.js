import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '@theme-ui/components';
import Container from './Container';

storiesOf('Components/Container', module)
  .add('all maxWidths', () => (
    <>
      <Container maxWidth="narrow" color="background" bg="primary" my={2}>
        <Text sx={{ fontFamily: 'body' }}>narrow</Text>
      </Container>
      <Container color="background" bg="primary" my={2}>
        <Text sx={{ fontFamily: 'body' }}>default</Text>
      </Container>
      <Container maxWidth="wide" color="background" bg="primary" my={2}>
        <Text sx={{ fontFamily: 'body' }}>wide</Text>
      </Container>
    </>
  ))
  .add('prevent mx override', () => (
    <Container maxWidth="narrow" mx={0} color="background" bg="primary">
      <Text sx={{ fontFamily: 'body' }}>
        Horizontal margins (mx) cannot be overridden.
      </Text>
    </Container>
  ));
