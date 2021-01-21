import * as React from 'react';
import * as styles from './userCardContainer.module.less';

const UserCardContainer: React.FC = () => (
  <div className={styles.contentContainer}>
    <img
      alt="foo"
      className={styles.img}
      src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80"
    />
  </div>
);

export default UserCardContainer;
