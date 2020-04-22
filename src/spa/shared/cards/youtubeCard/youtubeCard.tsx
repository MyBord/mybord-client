import * as React from 'react';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';
import * as styles from './youtubeCard.module.less';

interface Props {
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCard: React.FC<Props> = ({ youtubeVideoData }) => (
  <div className={styles.container}>
    <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoData} />
    <YoutubeCardDescription youtubeVideoData={youtubeVideoData} />
  </div>
);

export default YoutubeCard;
