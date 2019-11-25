import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import YoutubePlayer from '../youtubePlayer/youtubePlayer';
import * as styles from './youtubeCardThumbnail.module.scss';

interface Props {
  youtubeVideoData: YoutubeData;
}

const YoutubeCardThumbnail: React.FC<Props> = ({ youtubeVideoData }) => {
  const [showYoutubePlayer, setShowYoutubePlayer] = React.useState(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState(false);

  if (!showYoutubePlayer && !isYoutubePlayerLoaded) {
    return (
      <div className={styles.container}>
        <img
          alt="video thumbnail"
          className={styles.img}
          src={youtubeVideoData.videoThumbnail}
        />
        <div className={styles.playButtonDiv}>
          <PlayButton onClick={() => setShowYoutubePlayer(true)} />
        </div>
        <div className={styles.durationDiv}>
          <Typography
            color="white"
            font="roboto"
            size="small"
            text={youtubeVideoData.duration}
            weight="light"
          />
        </div>
      </div>
    );
  }
  return (
    <YoutubePlayer
      setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
      videoId={youtubeVideoData.videoId}
    />
  );
};

export default YoutubeCardThumbnail;
