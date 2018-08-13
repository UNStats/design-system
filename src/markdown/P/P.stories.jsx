import React from "react";
import { storiesOf } from "@storybook/react";
import P from "./P";
import Box from "../../helpers/Box";

const firstParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam metus dolor, sed vulputate nunc gravida vitae. Aliquam ac risus eget tellus egestas egestas id vitae arcu. Ut volutpat vitae nisl a tempor. In id ex et arcu viverra accumsan vel dapibus odio. Vivamus et massa posuere, dictum diam elementum, sagittis lectus. Cras sed lorem quis turpis lacinia tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc fringilla sem velit, vitae aliquam metus semper ut. Praesent tellus quam, semper quis lobortis a, rhoncus auctor dui. Fusce varius urna non elit aliquet, sed tincidunt justo mollis. In a consectetur elit. Vestibulum suscipit et eros nec maximus. Vivamus blandit libero nisl, at semper sapien vehicula id. Fusce rutrum diam odio, vitae laoreet quam sodales in. Morbi eget euismod elit. Pellentesque sit amet aliquet nulla.";

const secondParagraph =
  "Cras nec lectus vitae orci vestibulum mollis. Ut massa magna, eleifend eget finibus sagittis, ultricies in nisi. Donec placerat, felis et mollis hendrerit, orci lectus finibus dui, id luctus mauris urna in erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non lorem in dui molestie congue. Aliquam non lectus non justo commodo molestie. Donec auctor eros at arcu accumsan porttitor. In accumsan suscipit lorem eget aliquam. Aenean ullamcorper quam vel enim consequat lobortis. Cras at erat convallis, semper felis vitae, lacinia est. Morbi vulputate elementum quam.";

storiesOf("markdown/P", module)
  .addDecorator(story => <Box m={3}>{story()}</Box>)
  .add("default margin-bottom", () => (
    <React.Fragment>
      <P>{firstParagraph}</P>
      <P>{secondParagraph}</P>
    </React.Fragment>
  ))
  .add("custom margin-bottom", () => (
    <React.Fragment>
      <P mb={5}>{firstParagraph}</P>
      <P>{secondParagraph}</P>
    </React.Fragment>
  ));
