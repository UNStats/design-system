import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borders, borderColor, space } from "styled-system";
import DefaultAnchor from "../DefaultAnchor";
import StyledAnchor from "../../helpers/StyledAnchor";
import { colors } from "../../theme";

const Wrapper = styled.div`
  ${space};
`;

const Divider = styled.div`
  ${borders};
  ${borderColor};
  ${space};
  &:last-child {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const PreviewList = ({
  Anchor,
  dividerColor,
  mt,
  mb,
  Preview,
  textColor,
  values
}) => (
  <Wrapper mt={mt} mb={mb}>
    {values.map(({ href, ...value }) => (
      <Divider
        borderColor={dividerColor}
        borderBottom="2px solid"
        pb={3}
        mb={3}
        px={[0, 2]}
        key={href}
      >
        <StyledAnchor
          Anchor={Anchor}
          color={textColor}
          display="block"
          href={href}
        >
          <Preview {...value} />
        </StyledAnchor>
      </Divider>
    ))}
  </Wrapper>
);

PreviewList.propTypes = {
  Anchor: PropTypes.func,
  dividerColor: PropTypes.oneOf(Object.keys(colors)),
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  Preview: PropTypes.func.isRequired,
  textColor: PropTypes.oneOf(Object.keys(colors)),
  values: PropTypes.arrayOf(PropTypes.object).isRequired
};

PreviewList.defaultProps = {
  Anchor: DefaultAnchor,
  dividerColor: "primary",
  mt: 3,
  mb: 3,
  textColor: "black"
};

export default PreviewList;
