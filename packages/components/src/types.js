import { arrayOf, number, oneOf, oneOfType, shape, string } from 'prop-types';

// Generic types.
export const responsiveNumberType = oneOfType([number, arrayOf(number)]);
export const responsiveStringType = oneOfType([string, arrayOf(string)]);
export const responsiveType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);

// Specific types.

export const alignType = oneOf(['left', 'center', 'right']);

export const linkType = shape({
  text: string.isRequired,
  href: string.isRequired,
});

export const colorType = oneOf([
  'text',
  'background',
  'primary',
  'secondary',
  'accent',
  'muted',
  'inherit',
]);
