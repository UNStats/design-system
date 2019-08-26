import React from 'react';
import { storiesOf } from '@storybook/react';
import SmartLink from './SmartLink';

storiesOf('Components/SmartLink', module)
  .add('internal link', () => (
    <SmartLink href="/internal-link">internal link</SmartLink>
  ))
  .add('external link', () => (
    <SmartLink href="https://github.com/undataforum">external link</SmartLink>
  ))
  .add('matching pathname', () => (
    <SmartLink href="/path/to/internal/page/" pathname="/path/to/internal/page">
      internal link with matching pathname (not linked)
    </SmartLink>
  ))
  .add('mismatching pathname', () => (
    <SmartLink
      href="/path/to/internal/page"
      pathname="/path/to/another/internal/page"
    >
      internal link with mismatching pathname (linked)
    </SmartLink>
  ));
