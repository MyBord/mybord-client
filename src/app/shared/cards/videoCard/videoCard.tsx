import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { VideoData } from 'types/videoTypes';
import * as styles from './videoCard.module.scss';

interface Props {
  videoData: VideoData;
}

const VideoCard: React.FC<Props> = ({ videoData }) => (
  <div className={styles.container}>
    <img
      alt="video thumbnail"
      className={styles.img}
      src={videoData.videoThumbnail}
    />
    <div className={styles.title}>
      <Typography
        size="medium"
        text={videoData.videoTitle}
        weight="bold"
      />
    </div>
    <div className={styles.channelDiv}>
      <img
        alt="channel icon"
        className={styles.channelIcon}
        src={videoData.channelThumbnail}
      />
      <div className={styles.channelTitle}>
        <Typography
          size="small"
          text={videoData.channelTitle}
        />
      </div>
    </div>
    <div className={styles.statsContainer}>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="thumbsUp" size={16} />
        </div>
        <Typography
          size="small"
          text={videoData.likes}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="eye" size={16} />
        </div>
        <Typography
          size="small"
          text={videoData.views}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="calendar" size={16} />
        </div>
        <Typography
          size="small"
          text={videoData.duration}
        />
      </div>
    </div>
  </div>
);

export default VideoCard;
