import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./Avatar";
import Box from "../Box";
import profiles from "../../profiles";

storiesOf("components/Avatar", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default size", () => (
    <Avatar alt={profiles[0].name} img={profiles[0].img} />
  ))
  .add("small", () => (
    <Avatar alt={profiles[1].name} img={profiles[1].img} size="sm" />
  ))
  .add("medium", () => (
    <Avatar alt={profiles[2].name} img={profiles[2].img} size="md" />
  ))
  .add("large", () => (
    <Avatar alt={profiles[3].name} img={profiles[3].img} size="lg" />
  ))
  .add("responsive size", () => (
    <Avatar
      alt={profiles[4].name}
      img={profiles[4].img}
      size={["sm", "md", "lg"]}
    />
  ))
  .add("padding", () => (
    <div>
      <Avatar
        alt={profiles[5].name}
        img={profiles[5].img}
        border={1}
        p={0}
        m={1}
      />
      <Avatar
        alt={profiles[6].name}
        img={profiles[6].img}
        border={1}
        p={1}
        m={1}
      />
      <Avatar
        alt={profiles[7].name}
        img={profiles[7].img}
        border={1}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[8].name}
        img={profiles[8].img}
        border={1}
        p={3}
        m={1}
      />
    </div>
  ))
  .add("border width", () => (
    <div>
      <Avatar
        alt={profiles[9].name}
        img={profiles[9].img}
        border={0}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[10].name}
        img={profiles[10].img}
        border={1}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[11].name}
        img={profiles[11].img}
        border={2}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[12].name}
        img={profiles[12].img}
        border={3}
        p={2}
        m={1}
      />
    </div>
  ))
  .add("border color", () => (
    <div>
      <Avatar
        alt={profiles[13].name}
        img={profiles[13].img}
        border={3}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[14].name}
        img={profiles[14].img}
        color="blue"
        border={3}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[15].name}
        img={profiles[15].img}
        color="green"
        border={3}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[16].name}
        img={profiles[16].img}
        color="red"
        border={3}
        p={2}
        m={1}
      />
      <Avatar
        alt={profiles[17].name}
        img={profiles[17].img}
        color="yellow"
        border={3}
        p={2}
        m={1}
      />
    </div>
  ));
