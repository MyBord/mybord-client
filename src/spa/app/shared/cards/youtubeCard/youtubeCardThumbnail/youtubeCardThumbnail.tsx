import * as React from 'react';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCardThumbnail.module.scss';

interface Props {
  youtubeData: YoutubeData;
}

const YoutubeCardThumbnail: React.FC<Props> = ({ youtubeData }) => (
  <div className={styles.container}>
    <img
      alt="video thumbnail"
      className={styles.img}
      src={youtubeData.videoThumbnail}
    />
    <div className={styles.durationDiv}>
      <Typography
        color="white"
        font="roboto"
        size="small"
        text={youtubeData.duration}
        weight="light"
      />
    </div>
  </div>
);

export default YoutubeCardThumbnail;
