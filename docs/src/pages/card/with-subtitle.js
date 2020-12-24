import React from 'react';
import { Heading, Styled, Text, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Card } from '@undataforum/components';

const WithSubtitle = () => (
  <ThemeProvider theme={preset}>
    <Card
      title={<Heading as="h1">Card with subtitle</Heading>}
      subtitle={<Text>Sunt veniam commodo id est incididunt</Text>}
      m={2}
    >
      <Styled.p>
        Culpa ad eu quis nisi in exercitation magna dolor cillum magna cillum
        ipsum elit. Dolor occaecat velit non eu dolore pariatur amet. Pariatur
        anim id deserunt exercitation laboris cillum nisi deserunt occaecat.
      </Styled.p>
      <Styled.p>
        Ad elit velit aliqua occaecat adipisicing enim id ea ullamco in. Tempor
        ea culpa incididunt magna eu nostrud sint id velit. Sint et eiusmod
        aliqua sit sunt proident eiusmod magna occaecat mollit eu ad enim.
        Aliqua fugiat enim nisi incididunt tempor irure aliqua anim veniam quis
        proident minim velit. Irure eiusmod aliqua elit labore eu. Labore nisi
        in velit aute do in qui sit.
      </Styled.p>
      <Styled.p>
        Ut pariatur voluptate proident voluptate quis qui ea reprehenderit anim.
        Magna esse duis sit aliquip proident mollit dolore pariatur. Ex culpa
        laboris dolor sint magna mollit. Est eu fugiat dolor veniam fugiat ipsum
        consectetur laboris esse non dolor est ea. Eu enim consectetur duis
        eiusmod amet nostrud irure proident veniam eiusmod id aliquip cillum.
        Est et officia magna excepteur id consectetur dolore adipisicing id.
      </Styled.p>
    </Card>
  </ThemeProvider>
);

export default WithSubtitle;
