import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "rebass";
import TextPage from "./TextPage";

storiesOf("Pages/TextPage", module).add("default", () => (
  <TextPage
    title="Text Page"
    description="This is a text page for easy reading."
  >
    <Text as="p" fontFamily="serif" lineHeight="copy" my={0}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra
      lectus a mauris sodales, a elementum massa eleifend. Quisque lacus sapien,
      venenatis sit amet nisi ut, pulvinar ornare sapien. Maecenas quis magna
      vitae dolor condimentum mollis id lobortis ipsum. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Aliquam purus felis, cursus sit
      amet sagittis quis, feugiat ut erat. Suspendisse volutpat fringilla nunc.
      Aenean varius elementum posuere. Fusce ac nisi ultricies, cursus velit
      sed, viverra ante. Maecenas ut dignissim leo, eu tristique metus. Sed
      sagittis pretium faucibus. Quisque nec eros id diam posuere accumsan.
      Donec in vehicula orci. Nam eget maximus justo. Etiam vel consectetur
      nisi, vitae porta neque. Quisque fringilla mauris tortor, eu vulputate ex
      venenatis quis. In vitae convallis justo, eget tempus augue.
    </Text>
  </TextPage>
));
