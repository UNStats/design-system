import React from "react";
import { storiesOf } from "@storybook/react";
import PreviewList from "./PreviewList";
import ProfilePreview from "../ProfilePreview";
import profiles from "../../profiles";
import OpenInNewTabAnchor from "../OpenInNewTabAnchor";

storiesOf("components/PreviewList", module)
  .add("1 item", () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 1)} />
  ))
  .add("2 items", () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 2)} />
  ))
  .add("3 items", () => (
    <PreviewList Preview={ProfilePreview} values={profiles.slice(0, 3)} />
  ))
  .add("many items", () => (
    <PreviewList Preview={ProfilePreview} values={profiles} />
  ))
  .add("custom colors", () => (
    <PreviewList
      dividerColor="red"
      Preview={ProfilePreview}
      textColor="green"
      values={profiles}
    />
  ))
  .add("custom anchor", () => (
    <PreviewList
      Anchor={OpenInNewTabAnchor}
      Preview={ProfilePreview}
      values={profiles}
    />
  ));
