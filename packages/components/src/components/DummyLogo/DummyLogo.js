import React from 'react';
import { Box } from '@theme-ui/components';
import { responsiveType } from '../../types';

const DummyLogo = ({ height, width, ...props }) => {
  const svgHeight = height ? '100%' : undefined;
  const svgWidth = width ? '100%' : undefined;
  return (
    <Box {...props} sx={{ height, width }}>
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
