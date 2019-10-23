import { arrayOf, number, oneOf, oneOfType, string } from 'prop-types';

export const alignType = oneOf(['left', 'center', 'right']);

export const responsiveNumberType = oneOfType([number, arrayOf(number)]);
export const responsiveStringType = oneOfType([string, arrayOf(string)]);
export const responsiveType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);
