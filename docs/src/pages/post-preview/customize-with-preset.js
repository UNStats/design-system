import React from 'react';
import { Heading, Text, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Names, PostPreview } from '@undataforum/components';

const CustomizeWithPreset = () => (
  <ThemeProvider theme={preset}>
    <PostPreview
      post={{
        tag: 'Blog',
        title: (
          <Heading as="h1" mb={3}>
            Vestibulum proin eu mi nulla ac enim in tempor turpis
          </Heading>
        ),
        date: 'May 31, 2018',
        authors: (
          <Names
            values={[
              'Willow Rangall',
              'Suzy Cahan',
              'Sandra Abramovici',
              'Jan McKea',
              'Ola Brunger',
              'Ivette Rowlinson',
              'Madeleine Stredwick',
              'Lin Billson',
              'Alfie Piborn',
              'Garvy Bartlomiej',
            ]}
            mb={3}
          />
        ),
        description: (
          <Text as="p" variant="text.default" mb={3}>
            Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed
            interdum venenatis, turpis enim blandit mi, in porttitor pede justo
            eu massa. Donec dapibus. Duis at velit eu est congue elementum. In
            hac habitasse platea dictumst. Morbi vestibulum, velit id pretium
            iaculis, diam erat fermentum justo, nec condimentum neque sapien
            placerat ante. Nulla justo.
          </Text>
        ),
        href: '/blog/vestibulum-proin-eu',
      }}
      m={2}
    />
  </ThemeProvider>
);

export default CustomizeWithPreset;
