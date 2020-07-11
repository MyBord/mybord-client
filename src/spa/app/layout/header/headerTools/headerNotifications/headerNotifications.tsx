import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import HeaderNotificationsPopOverContent from './headerNotificationsPopOverContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <PopOver Content={<HeaderNotificationsPopOverContent />} placement="bottom-right">
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
