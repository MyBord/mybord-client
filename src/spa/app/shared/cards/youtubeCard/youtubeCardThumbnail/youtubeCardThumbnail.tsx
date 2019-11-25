import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCardThumbnail.module.scss';

interface Props {
  youtubeVideoData: YoutubeData;
}

const YoutubeCardThumbnail: React.FC<Props> = ({ youtubeVideoData }) => (
  <div className={styles.container}>
    <img
      alt="video thumbnail"
      className={styles.img}
      src={youtubeVideoData.videoThumbnail}
    />
    <div className={styles.playButtonDiv}>
      <PlayButton onClick={() => console.log('foo')} />
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

export default YoutubeCardThumbnail;
