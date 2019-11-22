import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCardDescription.module.scss';

interface Props {
  youtubeData: YoutubeData;
}

const YoutubeCardDescription: React.FC<Props> = ({ youtubeData }) => (
  <>
    <div className={styles.title}>
      <Typography
        size="medium"
        text={youtubeData.videoTitle}
        weight="bold"
      />
    </div>
    <div className={styles.channelDiv}>
      <img
        alt="channel icon"
        className={styles.channelIcon}
        src={youtubeData.channelThumbnail}
      />
      <div className={styles.channelTitle}>
        <Typography
          size="small"
          text={youtubeData.channelTitle}
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
          text={youtubeData.likes}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="eye" size={16} />
        </div>
        <Typography
          size="small"
          text={youtubeData.views}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="calendar" size={16} />
        </div>
        <Typography
          size="small"
          text={youtubeData.publishedAt}
        />
      </div>
    </div>
  </>
);

export default YoutubeCardDescription;
