import React from 'react';
import { number, string } from 'prop-types';
import { AspectRatio } from '@theme-ui/components';

// Don't add ...props because of https://github.com/UNDataForum/design-system/issues/269.
// To add spacing around videos use Container or Box.
// Player parameters: https://developers.google.com/youtube/player_parameters.
const Video = ({ id, title, ratio = 16 / 9 }) => (
  <AspectRatio ratio={ratio}>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio>
);

Video.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  ratio: number,
};

export default Video;
