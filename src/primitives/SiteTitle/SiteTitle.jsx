import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { display } from "styled-system";
import { Flex, Text } from "rebass";

const Hide = styled(Text)(display);

const SiteTitle = ({ color, ...props }) => (
  <Flex
    {...props}
    flexDirection={["row", "column"]}
    justifyContent="center"
    alignItems="center"
  >
    <Text
      css={{ "white-space": "nowrap" }}
      color={color}
      fontFamily="sans"
      fontSize={[4, 5, 4]}
      fontWeight="bold"
      mr={[2, 0]}
    >
      U
      <Hide as="span" display={["none", "inline"]}>
        nited{" "}
      </Hide>
      N
      <Hide as="span" display={["none", "inline"]}>
        ations
      </Hide>
    </Text>
    <Text
      css={{ "white-space": "nowrap" }}
      color={color}
      fontFamily="sans"
      fontSize={[4, 4, 3]}
      fontWeight="bold"
    >
      World Data Forum
    </Text>
  </Flex>
);

SiteTitle.propTypes = {
  color: PropTypes.string
};

SiteTitle.defaultProps = {
  color: "primary"
};

export default SiteTitle;
