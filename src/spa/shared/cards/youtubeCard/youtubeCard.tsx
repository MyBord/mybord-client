import * as React from 'react';
import api, { Resource } from 'api/api';
import { YoutubeData } from 'types/youtubeTypes';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';
import * as styles from './youtubeCard.module.less';

interface Props {
  resource: Resource<YoutubeData>;
}

interface SamplePageProps {
  videoId: string;
}

const YoutubeCardContainer: React.FC<SamplePageProps> = ({ videoId }) => {
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
  const youtubeVideoData = resource.youtubeVideoData.read();
  return (
    <div className={styles.container}>
      <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoData} />
      <YoutubeCardDescription youtubeVideoData={youtubeVideoData} />
    </div>
  );
};

export default YoutubeCardContainer;
