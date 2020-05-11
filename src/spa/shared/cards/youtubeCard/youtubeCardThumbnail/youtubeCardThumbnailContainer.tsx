import * as React from 'react';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubePlayerAnimation from 'framerMotion/youtubePlayerAnimation';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';
import YoutubePlayer from '../youtubePlayer/youtubePlayer';
import * as styles from './youtubeCardThumbnail.module.less';

interface Props {
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ youtubeVideoData }) => {
  const [showYoutubePlayer, setShowYoutubePlayer] = React.useState(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState(false);

  return (
    <div className={styles.container}>
      <YoutubePlayerAnimation isYoutubePlayerLoaded={isYoutubePlayerLoaded}>
        <YoutubeCardThumbnailComponent
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          setShowYoutubePlayer={setShowYoutubePlayer}
          youtubeVideoData={youtubeVideoData}
        />
      </YoutubePlayerAnimation>
      {
        showYoutubePlayer
        && (
          <YoutubePlayer
            setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
            youtubeVideoData={youtubeVideoData}
          />
        )
      }
    </div>
  );
};

export default YoutubeCardThumbnailContainer;
