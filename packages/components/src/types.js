import { arrayOf, number, oneOf, oneOfType, string } from 'prop-types';

export const responsiveNumberType = oneOfType([number, arrayOf(number)]);
export const responsiveType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);

const dimensions = ['height', 'width'];
export const scaleToType = oneOf(dimensions);
