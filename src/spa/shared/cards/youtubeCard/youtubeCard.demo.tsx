import * as React from 'react';
import youtubeVideoMockData from 'mockData/youtubeVideoMockData';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';
import * as styles from './youtubeCard.module.less';

const YoutubeCardDemo: React.FC = () => (
  <div className={styles.container}>
    <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoMockData} />
    <YoutubeCardDescription youtubeVideoData={youtubeVideoMockData} />
  </div>
);

export default YoutubeCardDemo;
