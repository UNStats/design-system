import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import AlternateSiteTitle from '../AlternateSiteTitle';
import Header from './Header';

storiesOf('Components/Header', module)
  .addDecorator(withKnobs)
  .add('default color', () => (
    <Header
      links={object('links', [
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/programme',
          text: 'Programme',
        },
      ])}
    />
  ))
  .add('custom color', () => (
    <Header
      color={text('color', 'green')}
      links={object('links', [
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/programme',
          text: 'Programme',
        },
      ])}
    />
  ))
  .add('alternate title', () => (
    <Header
      links={object('links', [
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/programme',
          text: 'Programme',
        },
      ])}
      title={color => <AlternateSiteTitle color={color} year={2018} />}
    />
  ));
