import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "rebass";
import { colorType } from "../types";

const AlternateSiteTitle = ({ color, year, ...props }) => (
  <Flex
    {...props}
    flexDirection={["row", "column"]}
    justifyContent="center"
    alignItems="center"
  >
    <Text
      color={color}
      fontFamily="sans"
      fontSize={[3, 4, 5]}
      fontWeight="bold"
      mr={[2, 0]}
    >
      {year}
    </Text>
    <Text
      color={color}
      fontFamily="sans"
      fontSize={[3, 3, 4]}
      fontWeight="bold"
    >
      #UNDataForum
    </Text>
  </Flex>
);

AlternateSiteTitle.propTypes = {
  color: colorType,
  year: PropTypes.number.isRequired
};

AlternateSiteTitle.defaultProps = {
  color: "primary"
};

export default AlternateSiteTitle;
