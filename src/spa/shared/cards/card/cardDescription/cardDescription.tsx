import * as React from 'react';
import CardDescriptionSwitch from './cardDescriptionSwitch';
import { UserCard } from 'schema/card';
import * as styles from './cardDescription.module.less';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const CardDescription: React.FC<Props> = ({ isPreview, userCard }) => (
  <div className={styles.div}>
    <CardDescriptionSwitch isPreview={isPreview} userCard={userCard} />
  </div>
);

export default CardDescription;
