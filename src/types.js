import {
  arrayOf,
  func,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from "prop-types";

const affiliationType = shape({
  jobtitle: string.isRequired,
  organization: string.isRequired
});

export const alignType = oneOf(["left", "center", "right"]);

export const colorType = oneOf([
  "primary",
  "blue",
  "green",
  "red",
  "yellow",
  "gray",
  "black",
  "white"
]);

export const badgeType = shape({
  color: colorType,
  text: string.isRequired,
  href: string
});

export const fontSizeType = oneOfType([number, arrayOf(number)]);

export const linkType = shape({
  text: string.isRequired,
  href: string.isRequired
});

export const profileType = shape({
  id: string.isRequired,
  avatar: func.isRequired,
  name: string,
  affiliation: affiliationType,
  badges: arrayOf(badgeType),
  href: string
});

export const postType = shape({
  id: string.isRequired,
  title: string.isRequired,
  date: string.isRequired,
  authors: arrayOf(profileType).isRequired,
  lead: string,
  href: string
});

export const scopeType = object;

export const themeType = shape({
  externalLink: func,
  internalLink: func
});
