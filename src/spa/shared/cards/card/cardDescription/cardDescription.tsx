import * as React from 'react';
import CardDescriptionSwitch from './cardDescriptionSwitch';
import { UserCard } from 'schema/card';
import * as styles from './cardDescription.module.less';

interface Props {
  userCard: UserCard;
}

const CardDescription: React.FC<Props> = ({ userCard }) => (
  <div className={styles.div}>
    <CardDescriptionSwitch userCard={userCard} />
  </div>
);

export default CardDescription;
