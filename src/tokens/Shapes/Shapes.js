import React from 'react';
import { withTheme } from 'styled-components';
import { height as styledHeight } from 'styled-system';
import { Box } from 'rebass';
import { colorType, responsiveType } from '../../types';
import {
  blueByDefault,
  lightBlueByDefault,
  greenByDefault,
  lightGreenByDefault,
  redByDefault,
  lightRedByDefault,
  yellowByDefault,
  lightYellowByDefault,
} from '../colors';

const Shapes = ({ color, height, width, ...props }) => {
  // Determine if height and width should be set on SVG.
  const svgHeight = height ? '100%' : undefined;
  const svgWidth = width ? '100%' : undefined;
  return (
    <Box
      {...props}
      css={`
        ${styledHeight}
        display: inline-block;
      `}
      height={height}
      width={width}
    >
      <svg viewBox="0 0 173 192" height={svgHeight} width={svgWidth}>
        <path
          d="M53.829 157.58h-33.49v33.49h33.49v-33.49z"
          fill={redByDefault(color, props)}
        />
        <path
          d="M55.579 138.59a17.54 17.54 0 1 0-35.08 0 17.54 17.54 0 0 0 35.08 0z"
          fill={greenByDefault(color, props)}
        />
        <path
          d="M162.809 157.58h-33.49v33.49h33.49v-33.49z"
          fill={yellowByDefault(color, props)}
        />
        <path
          d="M127.679 86.18h35.83l-17.95 33.49-17.88-33.49z"
          fill={lightYellowByDefault(color, props)}
        />
        <path
          d="M145.219 86.18h18.16l-17.96 33.49-.2-33.49z"
          fill={yellowByDefault(color, props)}
        />
        <path
          d="M74.189 191.51c9.687 0 17.54-7.853 17.54-17.54s-7.853-17.54-17.54-17.54-17.54 7.853-17.54 17.54 7.853 17.54 17.54 17.54z"
          fill={blueByDefault(color, props)}
        />
        <path
          d="M74.339 35.08c9.687 0 17.54-7.853 17.54-17.54S84.026 0 74.339 0s-17.54 7.853-17.54 17.54 7.853 17.54 17.54 17.54z"
          fill={yellowByDefault(color, props)}
        />
        <path
          d="M128.019 191.3h-35.83l17.96-34.18 17.87 34.18z"
          fill={greenByDefault(color, props)}
        />
        <path
          d="M125.149 76.19l-32.85-14.31 30.11-24.17 2.74 38.48zM77.86 65.122L46.25 76.186l11.064 31.61 31.61-11.064-11.064-31.61z"
          fill={blueByDefault(color, props)}
        />
        <path
          d="M46.319 76.19l11.06 31.62 15.36-5.38-11.07-31.61"
          fill={lightBlueByDefault(color, props)}
        />
        <path
          d="M127.369 122.03h-33.49v33.49h33.49v-33.49z"
          fill={blueByDefault(color, props)}
        />
        <path
          d="M32.788 32.257L0 39.077l6.82 32.788 32.788-6.82-6.82-32.788z"
          fill={greenByDefault(color, props)}
        />
        <path
          d="M55.349 122.11h35.83l-17.96 33.48-17.87-33.48z"
          fill={yellowByDefault(color, props)}
        />
        <path
          d="M162.809 157.58h-16.63v33.49h16.63v-33.49z"
          fill={lightYellowByDefault(color, props)}
        />
        <path
          d="M37.869 121.04h-.37v35h.37a17.54 17.54 0 0 0 0-35.08v.08z"
          fill={lightGreenByDefault(color, props)}
        />
        <path
          d="M141.248 35.225l-11.892 31.521 31.512 11.889 11.892-31.522-31.512-11.888z"
          fill={redByDefault(color, props)}
        />
        <path
          d="M156.95 41.178l-5.952 15.775 15.803 5.962 5.951-15.775-15.803-5.962z"
          fill={lightRedByDefault(color, props)}
        />
        <path
          d="M151.143 56.922l-5.951 15.775 15.803 5.962 5.951-15.775-15.803-5.962z"
          fill={lightRedByDefault(color, props)}
        />
        <path
          d="M54.629 117.09h-35.83l17.96-34.19 17.87 34.19z"
          fill={redByDefault(color, props)}
        />
        <path
          d="M108.499 119.11a17 17 0 1 1 0-34 17 17 0 0 1 0 34z"
          fill={greenByDefault(color, props)}
        />
        <path
          d="M146.529 155.4a17 17 0 1 1 0-34 17 17 0 0 1 0 34z"
          fill={redByDefault(color, props)}
        />
      </svg>
    </Box>
  );
};

Shapes.propTypes = {
  color: colorType,
  height: responsiveType,
  width: responsiveType,
};

export default withTheme(Shapes);
