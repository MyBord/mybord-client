import * as React from 'react';
import YoutubeCardThumbnailContainer, { Props } from './youtubeCardThumbnailContainer';

const YoutubeCardThumbnail: React.FC<Props> = (props) => (
  <YoutubeCardThumbnailContainer {...props} />
);

export default YoutubeCardThumbnail;
