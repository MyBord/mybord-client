import * as React from 'react';
import { UserCardData } from 'schema/card';
import Typography from 'typography/typography';
import * as styles from './userCard.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCard: React.FC<Props> = ({ userCardData }) => (
  <section className={styles.userCardContainer}>
    <div className={styles.contentContainer}>
      <img
        alt="foo"
        className={styles.img}
        src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80"
      />
    </div>
    <div className={styles.descriptionContainer}>
      <Typography
        hasMargin={false}
        text={userCardData.title}
        type="h6"
      />
      <Typography
        className={styles.subtitle}
        hasMargin={false}
        text={userCardData.subtitle}
        type="bodySmall"
      />
    </div>
  </section>
);

export default UserCard;
