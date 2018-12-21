import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "rebass";
import HeadingPage from "./HeadingPage";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra lectus a mauris sodales, a elementum massa eleifend. Quisque lacus sapien venenatis sit amet nisi ut, pulvinar ornare sapien. Maecenas quis magna vitae dolor condimentum mollis id lobortis ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam purus felis, cursus sit amet sagittis quis, feugiat ut erat. Suspendisse volutpat fringilla nunc. Aenean varius elementum posuere. Fusce ac nisi ultricies, cursus velit sed, viverra ante. Maecenas ut dignissim leo, eu tristique metus. Sed sagittis pretium faucibus. Quisque nec eros id diam posuere accumsan. Donec in vehicula orci. Nam eget maximus justo. Etiam vel consectetur nisi, vitae porta neque. Quisque fringilla mauris tortor, eu vulputate ex venenatis quis. In vitae convallis justo, eget tempus augue.";

storiesOf("Pages/HeadingPage", module)
  .add("short title", () => (
    <HeadingPage
      title="This is a short heading"
      description="Heading page with a short heading."
    >
      <Text as="p" fontFamily="serif" lineHeight="copy" my={0}>
        {content}
      </Text>
    </HeadingPage>
  ))
  .add("long title", () => (
    <HeadingPage
      title="This is a very very very very very very very very very very very very very very very very very very very very very very very very very very very long heading"
      description="Heading page with a long heading."
    >
      <Text as="p" fontFamily="serif" lineHeight="copy" my={0}>
        {content}
      </Text>
    </HeadingPage>
  ));
