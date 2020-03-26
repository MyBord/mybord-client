import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCardThumbnail.module.less';

interface Props {
  setShowYoutubePlayer?: (showYoutubePlayer: boolean) => void;
  showYoutubePlayer: boolean;
  youtubeVideoData: YoutubeData;
}

const YoutubeCardThumbnailComponent: React.FC<Props> = ({
  setShowYoutubePlayer,
  showYoutubePlayer,
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
        <PlayButton onClick={() => setShowYoutubePlayer(true)} shouldSpin={!showYoutubePlayer} />
      </div>
      )
    }
    <div className={styles.durationDiv}>
      <Typography
        color="white"
        font="roboto"
        size="small"
        text={youtubeVideoData.duration}
        weight="light"
      />
    </div>
  </>
);

export default YoutubeCardThumbnailComponent;
