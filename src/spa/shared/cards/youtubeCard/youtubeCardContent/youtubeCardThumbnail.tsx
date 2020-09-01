import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeVideoData } from 'types/youtubeTypes';
import * as styles from './youtubeCardContent.module.less';

interface Props {
  isYoutubePlayerLoaded: boolean;
  onPlay: (event: React.MouseEvent<HTMLButtonElement>) => void;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnail: React.FC<Props> = ({
  isYoutubePlayerLoaded,
  onPlay,
  youtubeVideoData,
}) => {
  console.log('*****');
  console.log(youtubeVideoData);
  return (
    <>
      <img
        alt="video thumbnail"
        className={styles.img}
        src={youtubeVideoData.videoThumbnail}
      />
      <div className={[styles.playButtonDiv, 'card-youtube-play-button'].join(' ')}>
        <PlayButton
          onPlay={onPlay}
          shouldSpin={!isYoutubePlayerLoaded}
        />
      </div>
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
};

export default YoutubeCardThumbnail;
