import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import HeaderNotificationsContent from './headerNotificationsContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <PopOver Content={<HeaderNotificationsContent />} placement="bottom-right">
    <div className={styles.parentDiv}>
      <hr className={styles.hr} />
      <div className={styles.iconDiv}>
        <Icon iconName="notification" size={30} />
      </div>
      <hr className={styles.hr} />
    </div>
  </PopOver>
);

export default HeaderNotifications;
