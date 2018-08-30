import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { display } from "styled-system";
import Avatar from "./Avatar";
import profiles from "../../profiles";

const Image = styled.img`
  ${display};
`;

storiesOf("Primitives/Avatar", module)
  .addWithPercyOptions("fixed size", { skip: true }, () => (
    <Avatar m={2}>
      {({ className }) => (
        <Image
          display="inline-block"
          alt={profiles[0].name}
          className={className}
          height={128}
          width={128}
          src={profiles[0].img}
        />
      )}
    </Avatar>
  ))
  .addWithPercyOptions("responsive size", { skip: true }, () => (
    <Avatar m={2}>
      {({ className }) => (
        <Fragment>
          <Image
            display={["inline-block", "none"]}
            alt={profiles[1].name}
            className={className}
            height={32}
            width={32}
            src={profiles[1].img}
          />
          <Image
            display={["none", "inline-block", "none"]}
            alt={profiles[1].name}
            className={className}
            height={64}
            width={64}
            src={profiles[1].img}
          />
          <Image
            display={["none", "none", "inline-block"]}
            alt={profiles[1].name}
            className={className}
            height={128}
            width={128}
            src={profiles[1].img}
          />
        </Fragment>
      )}
    </Avatar>
  ));
