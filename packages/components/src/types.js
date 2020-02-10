import { arrayOf, number, oneOf, oneOfType, string } from 'prop-types';

// Prop type for `align` prop (styled-system/theme-ui prop).
const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);
export const responsiveAlignType = oneOfType([alignType, arrayOf(alignType)]);

// Prop type for numbers (styled-system/theme-ui prop).
export const responsiveNumberType = oneOfType([number, arrayOf(number)]);

// Prop type for numbers or strings (styled-system/theme-ui prop).
export const responsiveType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);

const dimensions = ['height', 'width'];
export const scaleToType = oneOf(dimensions);
