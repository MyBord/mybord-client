import * as React from 'react';
import memo from 'utils/memo';
import YoutubeCardThumbnailContainer, { Props } from './youtubeCardThumbnailContainer';

const YoutubeCardThumbnail: React.FC<Props> = (props) => (
  <YoutubeCardThumbnailContainer {...props} />
);

export default memo(YoutubeCardThumbnail);
