import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { gridGap, gridTemplateColumns, justifyContent } from "styled-system";
import { Box, Link } from "rebass";

const Grid = styled(Box)(gridGap, gridTemplateColumns, justifyContent);

const PreviewList = ({
  color,
  gap,
  link,
  preview,
  values,
  width,
  ...props
}) => {
  const repeat = `repeat(auto-fit, ${width})`;
  return (
    <Grid
      {...props}
      css={{ display: "grid" }}
      gridGap={gap}
      gridTemplateColumns={repeat}
      justifyContent="center"
    >
      {values.map(({ href, ...value }) => (
        <Link as={link} css={{ display: "block" }} color={color} href={href}>
          {preview(value)}
        </Link>
      ))}
    </Grid>
  );
};

PreviewList.propTypes = {
  color: PropTypes.string,
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  link: PropTypes.func,
  preview: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired
};

PreviewList.defaultProps = {
  color: "primary",
  gap: 3,
  link: undefined
};

export default PreviewList;
