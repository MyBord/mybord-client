import * as React from 'react';
import youtubeVideoMockData from 'mockData/youtubeVideoMockData';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';

const YoutubeCardDemo: React.FC = () => (
  <>
    <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoMockData} />
    <YoutubeCardDescription youtubeVideoData={youtubeVideoMockData} />
  </>
);

export default YoutubeCardDemo;
