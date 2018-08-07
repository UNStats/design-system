import React from "react";
import { storiesOf } from "@storybook/react";
import RetinaImg from "./RetinaImg";
import img1x from "./guterres_400w.jpg";
import img2x from "./guterres_800w.jpg";

storiesOf("components/RetinaImage", module)
  .add("DPR 1x only", () => (
    <RetinaImg
      images={[img1x]}
      alt="António Guterres speaks at the General Assembly."
    />
  ))
  .add("DPR 1x and 2x", () => (
    <RetinaImg
      images={[img1x, img2x]}
      alt="António Guterres speaks at the General Assembly."
    />
  ));
