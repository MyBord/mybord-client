import * as React from 'react';
import Icon from 'icons/icon/icon';
import AntPopover from 'modals/antPopover/antPopover';
import HeaderNotificationsPopoverContent from './headerNotificationsPopoverContent';
import * as styles from './headerNotifications.module.less';

const HeaderNotifications: React.FC = () => (
  <AntPopover
    Content={HeaderNotificationsPopoverContent}
    hideTip
    overlayClassName={styles.popover}
    placement="bottomLeft"
    title="Notifications"
  >
    <div className={styles.iconDiv}>
      <Icon iconName="notification" size={30} />
    </div>
  </AntPopover>
);

export default HeaderNotifications;
