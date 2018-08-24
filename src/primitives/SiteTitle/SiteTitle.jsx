import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { display } from "styled-system";
import { Flex } from "grid-styled";
import Text from "../Text";
import { colors } from "../../theme";

const NoWrapText = styled(Text)`
  white-space: nowrap;
`;

const Hide = styled.span`
  ${display};
`;

const SiteTitle = ({ color }) => (
  <Flex
    flexDirection={["row", "column"]}
    justifyContent="center"
    alignItems="center"
  >
    <NoWrapText
      color={color}
      fontFamily="sansSerif"
      fontSize={[4, 5, 4]}
      fontWeight="bold"
      mr={[2, 0]}
    >
      U<Hide display={["none", "inline"]}>nited </Hide>N
      <Hide display={["none", "inline"]}>ations</Hide>
    </NoWrapText>
    <NoWrapText
      color={color}
      fontFamily="sansSerif"
      fontSize={[4, 4, 3]}
      fontWeight="bold"
    >
      World Data Forum
    </NoWrapText>
  </Flex>
);

SiteTitle.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors))
};

SiteTitle.defaultProps = {
  color: "primary"
};

export default SiteTitle;
