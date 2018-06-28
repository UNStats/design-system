import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Badge from "./Badge";

const render = (href, text) => <NavLink to={href}>{text}</NavLink>;

storiesOf("Badge", module)
  .add("default render prop", () => (
    <div>
      <Badge
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        default color
      </Badge>
      <Badge
        color="primary"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        primary color
      </Badge>
      <Badge
        color="blue"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        blue
      </Badge>
      <Badge
        color="green"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        green
      </Badge>
      <Badge
        color="red"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        red
      </Badge>
      <Badge
        color="yellow"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        yellow
      </Badge>
      <Badge
        color="gray"
        href="/?selectedKind=Badge&selectedStory=default%20render%20prop"
        m={1}
      >
        gray
      </Badge>
    </div>
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <div>
        <Badge
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          default color
        </Badge>
        <Badge
          color="primary"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          primary color
        </Badge>
        <Badge
          color="blue"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          blue
        </Badge>
        <Badge
          color="green"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          green
        </Badge>
        <Badge
          color="red"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          red
        </Badge>
        <Badge
          color="yellow"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          yellow
        </Badge>
        <Badge
          color="gray"
          href="/?selectedKind=Badge&selectedStory=custom%20render%20prop"
          render={render}
          m={1}
        >
          gray
        </Badge>
      </div>
    </MemoryRouter>
  ));
