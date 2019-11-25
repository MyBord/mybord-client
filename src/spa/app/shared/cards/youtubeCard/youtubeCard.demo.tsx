import * as React from 'react';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';
import youtubeVideoMockData from 'mockData/youtubeVideoMockData';
import * as styles from './youtubeCard.module.scss';

const YoutubeCardDemo: React.FC = () => (
  <div className={styles.container}>
    <YoutubeCardThumbnail youtubeVideoData={youtubeVideoMockData} />
    <YoutubeCardDescription youtubeVideoData={youtubeVideoMockData} />
  </div>
);

export default YoutubeCardDemo;
