import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubeCardDescription.module.scss';

interface Props {
  youtubeVideoData: YoutubeData;
}

const YoutubeCardDescription: React.FC<Props> = ({ youtubeVideoData }) => (
  <>
    <div className={styles.title}>
      <Typography
        maxTextLength={65}
        size="medium"
        text={youtubeVideoData.videoTitle}
        weight="bold"
      />
    </div>
    <div className={styles.channelDiv}>
      <img
        alt="channel icon"
        className={styles.channelIcon}
        src={youtubeVideoData.channelThumbnail}
      />
      <div className={styles.channelTitle}>
        <Typography
          maxTextLength={36}
          size="small"
          text={youtubeVideoData.channelTitle}
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
          text={youtubeVideoData.likes}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="eye" size={16} />
        </div>
        <Typography
          size="small"
          text={youtubeVideoData.views}
        />
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.iconDiv}>
          <Icon iconName="calendar" size={16} />
        </div>
        <Typography
          size="small"
          text={youtubeVideoData.publishedAt}
        />
      </div>
    </div>
  </>
);

export default YoutubeCardDescription;
