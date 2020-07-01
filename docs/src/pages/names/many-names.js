import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Names } from '@undataforum/components';

const ManyNames = () => (
  <ThemeProvider theme={preset}>
    <Names
      values={[
        'Nance MacFadin',
        'Clifford Skipperbottom',
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
        'Gustavus Splevings',
        'Cristi Tale',
        'Gae Phinn',
        'Leoline Hacaud',
        'Rufe Rockhill',
        'Bernadene van der Velden',
        'Edithe Densell',
        'Emmalynne Sone',
        'Ardella Sapir',
        'Ilise Sailor',
        'Anita Olander',
        'Gerik Frisby',
        'Rayshell Marmion',
        'Brooks Grene',
        'Bev Dorey',
        'Vladimir Parres',
        'Really really really really really really really really really really long name',
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default ManyNames;
