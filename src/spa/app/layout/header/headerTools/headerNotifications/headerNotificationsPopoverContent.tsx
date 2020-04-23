import * as React from 'react';
import Typography from 'typography/typography';
import Empty from 'icons/empty/empty';
import * as styles from './headerNotifications.module.less';

const HeaderNotificationsPopoverContent: React.FC = () => (
  <>
    <Empty text="You don't have any notifications" />
    <Typography
      iconName="logout"
      onClick={() => console.log('logout')}
      size="three"
      text="Logout"
    />
  </>
);

export default HeaderNotificationsPopoverContent;
