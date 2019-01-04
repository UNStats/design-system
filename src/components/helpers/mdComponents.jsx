import React from "react";
import { Link, Text } from "rebass";
import NewTabLink from "../NewTabLink";

export default {
  // eslint-disable-next-line react/prop-types
  a: ({ children, href }) => (
    <Link as={NewTabLink} href={href}>
      {children}
    </Link>
  ),
  // eslint-disable-next-line react/prop-types
  p: ({ children }) => (
    <Text as="p" fontFamily="serif" lineHeight="copy" mt={0} mb={3}>
      {children}
    </Text>
  )
};
