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

export const eventType = shape({
  type: string.isRequired,
  title: func.isRequired,
  start: string.isRequired,
  duration: string.isRequired,
  timezone: string.isRequired,
  speakers: func.isRequired,
  description: func,
  href: string,
});

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  authors: func.isRequired,
  lead: string,
  href: string,
});

const profile = {
  avatar: func.isRequired,
  honorific: string,
  name: string,
  jobtitle: string,
  organization: string,
  badges: arrayOf(
    shape({
      text: string.isRequired,
      href: string,
      mode: modeType,
    })
  ),
  href: string,
};

export const profileType = shape({ ...profile });

export const profileWithIdType = shape({ id: string.isRequired, ...profile });

export const themeType = shape({
  externalLink: func,
  internalLink: func,
});
