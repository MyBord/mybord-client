import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOverContainer from 'modals/popOver/popOverContainer';
import HeaderNotificationsPopOverContent from './headerNotificationsPopOverContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <PopOverContainer Content={<HeaderNotificationsPopOverContent />} placement="bottom-right">
    <div className={styles.div}>
      <Icon iconName="notification" size={30} />
    </div>
  </PopOverContainer>
);

export default HeaderNotifications;
