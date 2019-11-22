import * as React from 'react';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCard.module.scss';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';

interface Props {
  youtubeData: YoutubeData;
}

const YoutubeCard: React.FC<Props> = props => (
  <div className={styles.container}>
    <YoutubeCardThumbnail {...props} />
    <YoutubeCardDescription {...props} />
  </div>
);

export default YoutubeCard;
