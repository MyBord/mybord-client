import * as React from 'react';
import { YoutubeData } from 'types/youtubeTypes';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';
import YoutubePlayer from '../youtubePlayer/youtubePlayer';
import * as styles from './youtubeCardThumbnail.module.scss';

interface Props {
  youtubeVideoData: YoutubeData;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ youtubeVideoData }) => {
  const [showYoutubePlayer, setShowYoutubePlayer] = React.useState(false);

  if (!showYoutubePlayer) {
    return (
      <YoutubeCardThumbnailComponent
        setShowYoutubePlayer={setShowYoutubePlayer}
        youtubeVideoData={youtubeVideoData}
      />
    );
  }
  return (
    <div className={styles.container}>
      <YoutubePlayer youtubeVideoData={youtubeVideoData} />
    </div>
  );
};

export default YoutubeCardThumbnailContainer;
