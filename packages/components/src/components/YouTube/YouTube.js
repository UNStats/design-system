import React from 'react';
import { number, string } from 'prop-types';
import { AspectRatio } from '@theme-ui/components';

// Player parameters: https://developers.google.com/youtube/player_parameters.
const YouTube = ({ id, title, ratio = 16 / 9 }) => (
  <AspectRatio ratio={ratio}>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      title={title}
      frameborder="0"
      allowfullscreen
    />
  </AspectRatio>
);

YouTube.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  ratio: number,
};

export default YouTube;
