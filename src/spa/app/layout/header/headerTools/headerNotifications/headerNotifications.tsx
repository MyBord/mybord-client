import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOverTwo/popOverTwo';
import HeaderNotificationsPopOverContent from './headerNotificationsPopOverContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <PopOver Content={<HeaderNotificationsPopOverContent />} placement="bottom-right">
    <div className={styles.div}>
      <Icon iconName="notification" size={30} />
    </div>
  </PopOver>
);

export default HeaderNotifications;
