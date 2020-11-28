import * as React from 'react';
import * as styles from './userCardDescription.module.less';

interface Props {
  children: React.ReactElement;
}

const UserCardDescription: React.FC<Props> = ({ children }) => (
  <div className={styles.div}>
    {children}
  </div>
);

export default UserCardDescription;
