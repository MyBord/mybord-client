import * as React from 'react';
import YoutubePlayerContainer, { Props } from './youtubePlayerContainer';

const YoutubePlayer: React.FC<Props> = (props) => (
  <YoutubePlayerContainer {...props} />
);

export default YoutubePlayer;
