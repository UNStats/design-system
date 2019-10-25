import { arrayOf, number, oneOfType, string } from 'prop-types';

// Generic types.
export const responsiveType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);
