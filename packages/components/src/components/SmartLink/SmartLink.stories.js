import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { colors as themeColors } from '../../theme';
import SmartLink from './SmartLink';

// Add `inherit` to colors.
const colors = [...Object.keys(themeColors), 'inherit'];

storiesOf('Components/SmartLink', module)
  .addDecorator(withKnobs)
  .add('default color', () => (
    <SmartLink
      sx={{ fontFamily: 'body' }}
      href="https://github.com/undataforum"
    >
      default color
    </SmartLink>
  ))
  .add('custom color', () => (
    <SmartLink
      sx={{ color: select('color', colors, 'secondary'), fontFamily: 'body' }}
      href="https://github.com/undataforum"
    >
      custom color
    </SmartLink>
  ))
  .add('internal link', () => (
    <SmartLink sx={{ fontFamily: 'body' }} href="/internal-link">
      internal link
    </SmartLink>
  ))
  .add('external link', () => (
    <SmartLink
      sx={{ fontFamily: 'body' }}
      href="https://github.com/undataforum"
    >
      external link
    </SmartLink>
  ));
