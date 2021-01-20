import * as React from 'react';
import { UserCardData } from 'schema/card';
import * as styles from './gifCardContent.module.less';

interface Props {
  userCardData: UserCardData;
}

const GifCardContent: React.FC<Props> = ({ userCardData }) => (
  <img
    alt={userCardData.title}
    className={styles.img}
    src={userCardData.cardData.gifCardData.gifUrl}
  />
);

export default GifCardContent;
