import React from 'react';
import styled from 'styled-components';
import { compose, layout, space } from 'styled-system';
import { responsiveType } from '../../types';

const Box = styled.div(
  compose(
    layout,
    space
  )
);

const DummyLogo = ({ height, width, ...props }) => {
  const svgHeight = height ? '100%' : undefined;
  const svgWidth = width ? '100%' : undefined;
  return (
    <Box {...props} height={height} width={width}>
      <svg
        viewBox="0 0 24 24"
        height={svgHeight}
        width={svgWidth}
        fill="currentColor"
      >
        <path d="M12 2L2 20h20z" />
      </svg>
    </Box>
  );
};

DummyLogo.propTypes = {
  height: responsiveType,
  width: responsiveType,
};

export default DummyLogo;
