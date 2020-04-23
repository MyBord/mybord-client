import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { YoutubeVideoData } from 'types/youtubeTypes';
import * as styles from './youtubeCardDescription.module.less';

interface Props {
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardDescription: React.FC<Props> = ({ youtubeVideoData }) => (
  <>
    <div className={styles.title}>
      <Typography
        maxTextLength={65}
        size="two"
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
          size="one"
          text={youtubeVideoData.channelTitle}
        />
      </div>
    </div>
    <div className={styles.statsContainer}>
      <div className={styles.statsDiv}>
        <Icon iconName="thumbsUp" size={16} />
        <Typography
          size="one"
          text={youtubeVideoData.likes}
        />
      </div>
      <div className={styles.statsDiv}>
        <Icon iconName="eye" size={16} />
        <Typography
          size="one"
          text={youtubeVideoData.views}
        />
      </div>
      <div className={styles.statsDiv}>
        <Icon iconName="calendar" size={16} />
        <Typography
          size="one"
          text={youtubeVideoData.publishedAt}
        />
      </div>
    </div>
  </>
);

export default YoutubeCardDescription;
