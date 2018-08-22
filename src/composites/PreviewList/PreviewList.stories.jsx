import React from "react";
import { storiesOf } from "@storybook/react";
import PreviewList from "./PreviewList";
import ProfilePreview from "../ProfilePreview";
import profiles from "../../profiles";
import NewTabAnchor from "../../primitives/NewTabAnchor";

storiesOf("Composites/PreviewList", module)
  .addWithPercyOptions("1 item", { skip: true }, () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 1)} />
  ))
  .addWithPercyOptions("2 items", { skip: true }, () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 2)} />
  ))
  .addWithPercyOptions("3 items", { skip: true }, () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 3)} />
  ))
  .addWithPercyOptions("many items", { skip: true }, () => (
    <PreviewList Preview={ProfilePreview} values={profiles} />
  ))
  .addWithPercyOptions("custom colors", { skip: true }, () => (
    <PreviewList
      dividerColor="red"
      Preview={ProfilePreview}
      textColor="green"
      values={profiles}
    />
  ))
  .addWithPercyOptions("custom anchor", { skip: true }, () => (
    <PreviewList
      Anchor={NewTabAnchor}
      Preview={ProfilePreview}
      values={profiles}
    />
  ));
