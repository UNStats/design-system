import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '@theme-ui/components';

import DummyLogo from '../DummyLogo';

import Hero from './Hero';

const image = () => (
  <Image
    sx={{
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
    }}
    src="/emiliano-bar-kheTI8pIywU-unsplash.jpg"
  />
);

const logo = () => <DummyLogo scaleTo="height" />;

storiesOf('Components/Hero', module)
  .add('with action', () => (
    <Hero
      image={image}
      logo={logo}
      text="Itaque earum rerum hic tenetur a sapiente delectus"
      action={{
        text: 'Submit your proposal',
        href: '/2020/call-for-proposals',
      }}
    />
  ))
  .add('without action', () => (
    <Hero
      image={image}
      logo={logo}
      text="Itaque earum rerum hic tenetur a sapiente delectus"
    />
  ));
