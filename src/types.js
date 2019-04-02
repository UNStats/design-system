import {
  arrayOf,
  func,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

// Generic types.

export const responsiveNumberType = oneOfType([number, arrayOf(number)]);

export const responsiveStringType = oneOfType([string, arrayOf(string)]);

export const responsiveNumberOrStringType = oneOfType([
  number,
  arrayOf(number),
  string,
  arrayOf(string),
]);

// Specific types.

const affiliationType = shape({
  jobtitle: string.isRequired,
  organization: string.isRequired,
});

export const alignType = oneOf(['left', 'center', 'right']);

export const colorType = oneOf([
  'primary',
  'blue',
  'green',
  'red',
  'yellow',
  'gray',
  'black',
  'white',
]);

export const badgeType = shape({
  color: colorType,
  text: string.isRequired,
  href: string,
});

export const linkType = shape({
  text: string.isRequired,
  href: string.isRequired,
});

export const profileType = shape({
  avatar: func.isRequired,
  name: string,
  affiliation: affiliationType,
  badges: arrayOf(badgeType),
  href: string,
});

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  authors: func.isRequired,
  lead: string,
  href: string,
});

export const themeType = shape({
  externalLink: func,
  internalLink: func,
});
