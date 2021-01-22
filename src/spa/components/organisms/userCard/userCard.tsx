import * as React from 'react';
import { UserCardData } from 'schema/card';
import UserCardDescription from './userCardDescription/userCardDescription';
import UserCardContainer from './userCardContainer/userCardContainer';
import * as styles from './userCard.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCard: React.FC<Props> = ({ userCardData }) => (
  <section className={styles.userCardContainer}>
    <div className={styles.contentContainer}>
      <UserCardContainer userCardData={userCardData} />
    </div>
    <UserCardDescription userCardData={userCardData} />
  </section>
);

export default UserCard;
