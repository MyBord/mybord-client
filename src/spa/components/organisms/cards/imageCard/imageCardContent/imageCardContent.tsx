import * as React from 'react';
import { UserCard } from 'schema/card';
import * as styles from './imageCardContent.module.less';

interface Props {
  userCard: UserCard;
}

const ImageCardContent: React.FC<Props> = ({ userCard }) => (
  <img
    alt={userCard.title}
    className={styles.img}
    src={userCard.cardData.imageCardData.imageUrl}
  />
);

export default ImageCardContent;
