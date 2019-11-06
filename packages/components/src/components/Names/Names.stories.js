import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Names, { variants } from './Names';

storiesOf('Components/Names', module)
  .addDecorator(withKnobs)
  .add('a few names', () => (
    <Names
      values={[
        'Berenice Feldmus',
        'Sidonnie Halbeard',
        'Jacenta Busch',
        'Mercie Kuban',
        'Candis Ruggs',
      ]}
      variant={select('variant', variants, 'default')}
      m={2}
    />
  ))
  .add('many names', () => (
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
      variant={select('variant', variants, 'default')}
      m={2}
    />
  ));
