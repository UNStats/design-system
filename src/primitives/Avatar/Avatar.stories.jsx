import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { display } from "styled-system";
import { Box, Image } from "rebass";
import Avatar from "./Avatar";
import profiles from "../../profiles";

const Img = styled(Image)(display);

storiesOf("Primitives/Avatar", module)
  .addWithJSX("fixed size", () => (
    <Box m={2}>
      <Avatar>
        {() => (
          <Img
            display="block"
            alt={profiles[0].name}
            borderRadius="circle"
            height={128}
            width={128}
            src={profiles[0].img}
          />
        )}
      </Avatar>
    </Box>
  ))
  .addWithJSX("responsive size", () => (
    <Box m={2}>
      <Avatar>
        {() => (
          <Fragment>
            <Img
              display={["block", "none"]}
              alt={profiles[1].name}
              borderRadius="circle"
              height={32}
              width={32}
              src={profiles[1].img}
            />
            <Img
              display={["none", "block", "none"]}
              alt={profiles[1].name}
              borderRadius="circle"
              height={64}
              width={64}
              src={profiles[1].img}
            />
            <Img
              display={["none", "none", "block"]}
              alt={profiles[1].name}
              borderRadius="circle"
              height={128}
              width={128}
              src={profiles[1].img}
            />
          </Fragment>
        )}
      </Avatar>
    </Box>
  ));
