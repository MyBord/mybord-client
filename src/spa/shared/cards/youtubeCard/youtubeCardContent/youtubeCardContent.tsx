import * as React from 'react';
import memo from 'utils/memo';
import YoutubeCardContentContainer, { Props } from './youtubeCardContentContainer';

const YoutubeCardContent: React.FC<Props> = (props) => (
  <YoutubeCardContentContainer {...props} />
);

export default memo(YoutubeCardContent);
