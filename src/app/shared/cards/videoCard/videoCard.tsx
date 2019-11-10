import * as React from 'react';
import Typography from 'typography/typography';
import Icon from 'icons/icon/icon';
import * as styles from './videoCard.module.scss';

const VideoCard: React.FC = () => (
  <div className={styles.container}>
    <img
      alt="video thumbnail"
      className={styles.img}
      src="https://i.ytimg.com/vi/ImEnWAVRLU0/mqdefault.jpg"
    />
    <div className={styles.title}>
      <Typography
        size="medium"
        text="Mike Ross and Rachel Zane Meet For The First Time | Suits"
        weight="bold"
      />
    </div>
    <div className={styles.channelDiv}>
      <img
        alt="channel icon"
        className={styles.channelIcon}
        src="https://yt3.ggpht.com/a-/AAuE7mB3fAbzXqOP6_An4ADb6ykmjTqDbcH38xwvtw=s68-c-k-c0x00ffffff-no-rj-mo"
      />
      <div className={styles.channelTitle}>
        <Typography
          size="small"
          text="Suits International"
        />
      </div>
    </div>
    <div className={styles.statsDiv}>
      <div className={styles.likesDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="thumbsUp" size={16} />
        </div>
        <Typography
          size="small"
          text="12345"
        />
      </div>
      <div className={styles.viewsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="eye" size={16} />
        </div>
        <Typography
          size="small"
          text="12345"
        />
      </div>
    </div>
  </div>
);

export default VideoCard;
