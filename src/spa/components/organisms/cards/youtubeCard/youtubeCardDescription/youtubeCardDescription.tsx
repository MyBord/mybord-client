import * as React from 'react';
import Icon from 'icon/icon';
import Typography from 'typography/typography';
import { UserCard } from 'schema/card';
import * as styles from './youtubeCardDescription.module.less';

interface Props {
  userCard: UserCard;
}

const YoutubeCardDescription: React.FC<Props> = ({ userCard }) => (
  <div className={styles.container}>
    <div>
      <Typography
        maxTextLength={60}
        size="two"
        text={userCard.title}
        weight="bold"
      />
    </div>
    <div>
      <div className={styles.channelDiv}>
        <img
          alt="channel icon"
          className={styles.channelIcon}
          src={userCard.cardData.youtubeCardData.channelThumbnail}
        />
        <div className={styles.channelTitle}>
          <Typography
            maxTextLength={60}
            size="one"
            text={userCard.cardData.youtubeCardData.channelTitle}
          />
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsDiv}>
          <Icon iconName="thumbsUp" size={16} />
          <Typography
            size="one"
            text={userCard.cardData.youtubeCardData.likes}
          />
        </div>
        <div className={styles.statsDiv}>
          <Icon iconName="eye" size={16} />
          <Typography
            size="one"
            text={userCard.cardData.youtubeCardData.views}
          />
        </div>
        <div className={styles.statsDiv}>
          <Icon iconName="calendar" size={16} />
          <Typography
            size="one"
            text={userCard.cardData.youtubeCardData.publishedAt}
          />
        </div>
      </div>
    </div>
  </div>
);

export default YoutubeCardDescription;
