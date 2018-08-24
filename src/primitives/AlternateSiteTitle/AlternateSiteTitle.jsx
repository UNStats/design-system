import React from "react";
import PropTypes from "prop-types";
import { Flex } from "grid-styled";
import Text from "../Text";
import { colors } from "../../theme";

const AlternateSiteTitle = ({ color, year }) => (
  <Flex
    flexDirection={["row", "column"]}
    justifyContent="center"
    alignItems="center"
  >
    <Text
      color={color}
      fontFamily="sansSerif"
      fontSize={[4, 3, 2]}
      fontWeight="bold"
      mr={[2, 0]}
    >
      {year}
    </Text>
    <Text
      color={color}
      fontFamily="sansSerif"
      fontSize={[4, 4, 3]}
      fontWeight="bold"
    >
      #UNDataForum
    </Text>
  </Flex>
);

AlternateSiteTitle.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  year: PropTypes.number.isRequired
};

AlternateSiteTitle.defaultProps = {
  color: "primary"
};

export default AlternateSiteTitle;
