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
    <div className={styles.title}>
      <Typography
        text="Mike Ross and Rachel Zane Meet For The First Time | Suits"
        weight="bold"
      />
    </div>
    <div>
      <img
        alt="channel icon"
        className={styles.img}
        src="https://yt3.ggpht.com/a-/AAuE7mB3fAbzXqOP6_An4ADb6ykmjTqDbcH38xwvtw=s68-c-k-c0x00ffffff-no-rj-mo"
      />
      <Typography
        size="small"
        text="Suits International"
      />
    </div>
  </div>
);

export default VideoCard;
