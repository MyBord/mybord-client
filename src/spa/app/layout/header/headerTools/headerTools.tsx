import * as React from 'react';
import PopOverContainer from 'modals/popOver/popOverContainer';
import Icon from 'icons/icon/icon';
import HeaderAnimation from 'framerMotion/headerAnimation';
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
    <PopOverContainer Content={<h1>hello world</h1>} placement="bottom-center">
      <div className={styles.notificationsIconDiv}>
        <Icon iconName="notification" size={30} />
      </div>
    </PopOverContainer>
    <div className={styles.hrParentDiv}>
      <div className={styles.hrDiv}>
        <hr className={styles.hr} />
      </div>
    </div>
    <PopOverContainer Content={<h1>hello world</h1>} placement="bottom-center">
      <div className={styles.profileIconDiv}>
        <Icon iconName="avatar" size={40} />
        <div className={styles.arrowIconDiv}>
          <Icon iconName="downArrow" size={10} />
        </div>
      </div>
    </PopOverContainer>
  </section>
);

export default HeaderTools;
