import * as React from 'react';
import Icon from 'icon/icon';
import Typography from 'typography/typography';
import { UserCardData } from 'schema/card';
import * as styles from './youtubeCardDescription.module.less';

interface Props {
  userCardData: UserCardData;
}

const YoutubeCardDescription: React.FC<Props> = ({ userCardData }) => (
  <div className={styles.container}>
    <div>
      <Typography
        maxTextLength={60}
        size="two"
        text={userCardData.title}
        weight="bold"
      />
    </div>
    <div>
      <div className={styles.channelDiv}>
        <img
          alt="channel icon"
          className={styles.channelIcon}
          src={userCardData.cardData.youtubeCardData.channelThumbnail}
        />
        <div className={styles.channelTitle}>
          <Typography
            maxTextLength={60}
            size="one"
            text={userCardData.cardData.youtubeCardData.channelTitle}
          />
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsDiv}>
          <Icon iconName="thumbsUp" size={16} />
          <Typography
            size="one"
            text={userCardData.cardData.youtubeCardData.likes}
          />
        </div>
        <div className={styles.statsDiv}>
          <Icon iconName="eye" size={16} />
          <Typography
            size="one"
            text={userCardData.cardData.youtubeCardData.views}
          />
        </div>
        <div className={styles.statsDiv}>
          <Icon iconName="calendar" size={16} />
          <Typography
            size="one"
            text={userCardData.cardData.youtubeCardData.publishedAt}
          />
        </div>
      </div>
    </div>
  </div>
);

export default YoutubeCardDescription;
