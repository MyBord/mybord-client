import * as React from 'react';
import { UserCardData } from 'schema/card';
import * as styles from './imageCardContent.module.less';

interface Props {
  userCardData: UserCardData;
}

const ImageCardContent: React.FC<Props> = ({ userCardData }) => (
  <img
    alt={userCardData.title}
    className={styles.img}
    src={userCardData.cardData.imageCardData.imageUrl}
  />
);

export default ImageCardContent;
