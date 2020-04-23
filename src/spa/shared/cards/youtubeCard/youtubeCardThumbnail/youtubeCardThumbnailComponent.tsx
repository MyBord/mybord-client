import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeVideoData } from 'types/youtubeTypes';
import * as styles from './youtubeCardThumbnail.module.less';

interface Props {
  isYoutubePlayerLoaded: boolean;
  setShowYoutubePlayer?: (showYoutubePlayer: boolean) => void;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnailComponent: React.FC<Props> = ({
  isYoutubePlayerLoaded,
  setShowYoutubePlayer,
  youtubeVideoData,
}) => (
  <>
    <img
      alt="video thumbnail"
      className={styles.img}
      src={youtubeVideoData.videoThumbnail}
    />
    {
      setShowYoutubePlayer
      && (
      <div className={styles.playButtonDiv}>
        <PlayButton
          onClick={() => setShowYoutubePlayer(true)}
          shouldSpin={!isYoutubePlayerLoaded}
        />
      </div>
      )
    }
    <div className={styles.durationDiv}>
      <Typography
        color="white"
        font="roboto"
        size="one"
        text={youtubeVideoData.duration}
        weight="light"
      />
    </div>
  </>
);

export default YoutubeCardThumbnailComponent;
