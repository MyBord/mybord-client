import * as React from 'react';
import { UserCard } from 'schema/card';
import * as styles from './gifCardContent.module.less';

interface Props {
  userCard: UserCard;
}

const GifCardContent: React.FC<Props> = ({ userCard }) => (
  <img
    alt={userCard.title}
    className={styles.img}
    src={userCard.cardData.gifCardData.gifUrl}
  />
);

export default GifCardContent;
