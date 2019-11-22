import * as React from 'react';
import YoutubeCard from './youtubeCard';

const YoutubeCardDemo: React.FC = () => (
  <YoutubeCard youtubeData={{
    channelThumbnail: 'https://yt3.ggpht.com/a/AGF-l7-xbjXcMm1xSjaLZ5L8nUmXU6RzAlicYFbrUQ=s240-c-k-c0xffffffff-no-rj-mo',
    channelTitle: 'LuisFonsiVEVO',
    duration: '01:02:03',
    likes: '123,456',
    publishedAt: '3y ago',
    videoThumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg',
    videoTitle: 'Luis Fonsi - Despacito ft. Daddy Yankee',
    views: '987,123',
  }}
  />
);

export default YoutubeCardDemo;
