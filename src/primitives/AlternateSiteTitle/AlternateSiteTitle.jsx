import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "rebass";

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
      fontSize={[4, 3, 2]}
      fontWeight="bold"
      mr={[2, 0]}
    >
      {year}
    </Text>
    <Text
      color={color}
      fontFamily="sans"
      fontSize={[4, 4, 3]}
      fontWeight="bold"
    >
      #UNDataForum
    </Text>
  </Flex>
);

AlternateSiteTitle.propTypes = {
  color: PropTypes.string,
  year: PropTypes.number.isRequired
};

AlternateSiteTitle.defaultProps = {
  color: "primary"
};

export default AlternateSiteTitle;
