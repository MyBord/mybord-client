import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { UserCard } from 'schema/card';
import * as styles from './youtubeCardDescription.module.less';

interface Props {
  userCard: UserCard;
}

const foo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const YoutubeCardDescription: React.FC<Props> = ({ userCard }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <Typography
        maxTextLength={60}
        size="two"
        // text={userCard.cardData.youtubeCardData.videoTitle}
        text={foo}
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
            text={foo}
            // text={userCard.cardData.youtubeCardData.channelTitle}
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
