import * as React from 'react';
import Typography from 'typography/typography';
import Empty from 'icons/empty/empty';
import * as styles from './headerNotifications.module.less';

const HeaderNotificationsPopOverContent: React.FC = () => (
  <div className={styles.contentDiv}>
    <Empty />
    <Typography color="blue" text="You don't have any notifications" />
  </div>
);

export default HeaderNotificationsPopOverContent;
