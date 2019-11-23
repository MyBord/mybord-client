import * as React from 'react';
import api, { Resource } from 'api/api';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';
import * as styles from './youtubeCard.module.scss';

interface Props {
  resource: Resource;
}

interface SamplePageProps {
  videoId: string;
}

const SamplePage: React.FC<SamplePageProps> = ({ videoId }) => {
  const youtubeVideoDataResource = api.getYoutubeVideoData(videoId);
  return (
    <React.Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <YoutubeCard resource={youtubeVideoDataResource} />
    </React.Suspense>
  );
};

const YoutubeCard: React.FC<Props> = ({ resource }) => {
  const youtubeData = resource.youtubeVideoData.read();
  return (
    <div className={styles.container}>
      // @ts-ignore // ToDo
      <YoutubeCardThumbnail youtubeData={youtubeData} />
      // @ts-ignore // ToDo
      <YoutubeCardDescription youtubeData={youtubeData} />
    </div>
  );
};

export default SamplePage;
