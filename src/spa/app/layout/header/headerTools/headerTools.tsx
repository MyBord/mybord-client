import * as React from 'react';
import HeaderNotifications from './headerNotifications/headerNotifications';
import HeaderProfile from './headerProfile/headerProfile';
import * as styles from './headerTools.module.less';

const HeaderTools: React.FC = () => (
  <section className={styles.section}>
    <hr className={styles.hr} />
    <HeaderNotifications />
    <hr className={styles.hr} />
    <HeaderProfile />
  </section>
);

export default HeaderTools;
