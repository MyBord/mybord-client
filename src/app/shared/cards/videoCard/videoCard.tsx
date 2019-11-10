import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './videoCard.module.scss';

const VideoCard: React.FC = () => (
  <div className={styles.div}>
    <img
      alt="video thumbnail"
      className={styles.img}
      src="https://i.ytimg.com/vi/ImEnWAVRLU0/mqdefault.jpg"
    />
    <Typography
      text="This is a video title"
      type="boldText"
    />
    <Typography
      text="this is channel info"
      type="text"
    />
  </div>
);

export default VideoCard;
