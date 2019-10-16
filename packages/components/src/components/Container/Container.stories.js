import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'rebass';
import Container from './Container';

storiesOf('Components/Container', module).add('all maxWidths', () => (
  <>
    <Container maxWidth="narrow" color="white" bg="primary" my={2}>
      <Text fontFamily="body">narrow</Text>
    </Container>
    <Container color="white" bg="primary" my={2}>
      <Text fontFamily="body">default</Text>
    </Container>
    <Container maxWidth="wide" color="white" bg="primary" my={2}>
      <Text fontFamily="body">wide</Text>
    </Container>
  </>
));
