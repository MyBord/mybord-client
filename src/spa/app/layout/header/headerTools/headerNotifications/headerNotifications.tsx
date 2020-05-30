import * as React from 'react';
import Icon from 'icons/icon/icon';
import Popover from 'shared/modals/popover/popover';
import HeaderNotificationsPopoverContent from './headerNotificationsPopoverContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <Popover
    Content={HeaderNotificationsPopoverContent}
    hideTip
    overlayClassName={styles.popover}
    placement="bottomLeft"
    title="Notifications"
  >
    <div className={styles.iconDiv}>
      <Icon iconName="notification" size={30} />
    </div>
  </Popover>
);

export default HeaderNotifications;
