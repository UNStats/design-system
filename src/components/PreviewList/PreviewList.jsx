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

const Separator = styled.div`
  ${borders};
  ${borderColor};
  ${space};
  &:last-child {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const PreviewList = ({ Anchor, color, Preview, mt, mb, values }) => (
  <Wrapper mt={mt} mb={mb}>
    {values.map(({ href, ...value }) => (
      <Separator
        borderColor={color}
        borderBottom="2px solid"
        pb={3}
        mb={3}
        px={[0, 2]}
        key={href}
      >
        <StyledAnchor Anchor={Anchor} href={href}>
          <Preview color={color} {...value} />
        </StyledAnchor>
      </Separator>
    ))}
  </Wrapper>
);

PreviewList.propTypes = {
  Anchor: PropTypes.func,
  color: PropTypes.oneOf(Object.keys(colors)),
  Preview: PropTypes.func.isRequired,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  values: PropTypes.arrayOf(PropTypes.object).isRequired
};

PreviewList.defaultProps = {
  Anchor: DefaultAnchor,
  color: "primary",
  mt: 3,
  mb: 3
};

export default PreviewList;
