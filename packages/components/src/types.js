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
export const responsiveType = oneOfType([
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

export const linkType = shape({
  text: string.isRequired,
  href: string.isRequired,
});

export const modeType = oneOf([
  'primary',
  'secondary',
  'blue',
  'green',
  'red',
  'yellow',
]);

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  authors: func.isRequired,
  lead: string,
  href: string,
});

export const profileType = shape({
  avatar: func.isRequired,
  name: string,
  affiliation: affiliationType,
  badges: arrayOf(
    shape({
      link: linkType.isRequired,
      mode: modeType,
    })
  ),
  href: string,
});

export const themeType = shape({
  externalLink: func,
  internalLink: func,
});
