import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from 'rebass';
import Container from './Container';

storiesOf('Components/Container', module).add('all widths', () => (
  <Box style={{ whiteSpace: 'nowrap' }}>
    <Container maxWidth={1} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>1rem maxWidth</Text>
    </Container>
    <Container maxWidth={2} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>2rem maxWidth</Text>
    </Container>
    <Container maxWidth={3} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>4rem maxWidth</Text>
    </Container>
    <Container maxWidth={4} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>8rem maxWidth</Text>
    </Container>
    <Container maxWidth={5} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>16rem maxWidth</Text>
    </Container>
    <Container maxWidth={6} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>32rem maxWidth</Text>
    </Container>
    <Container maxWidth={7} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>48rem maxWidth</Text>
    </Container>
    <Container maxWidth={8} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>64rem maxWidth</Text>
    </Container>
    <Container maxWidth={9} color="white" bg="green" px={[2, 3, 0]} m={2}>
      <Text>96rem maxWidth</Text>
    </Container>
  </Box>
));
