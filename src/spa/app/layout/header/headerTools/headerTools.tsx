import * as React from 'react';
import HeaderNotifications from './headerNotifications/headerNotifications';
import HeaderProfile from './headerProfile/headerProfile';
import * as styles from './headerTools.module.less';

const HeaderTools: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.hrParentDiv}>
      <div className={styles.hrDiv}>
        <hr className={styles.hr} />
      </div>
    </div>
    <HeaderNotifications />
    <div className={styles.hrParentDiv}>
      <div className={styles.hrDiv}>
        <hr className={styles.hr} />
      </div>
    </div>
    <HeaderProfile />
  </section>
);

export default HeaderTools;
