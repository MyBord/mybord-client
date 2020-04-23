import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './headerNotificationsPopoverContent.module.less';

const HeaderNotificationsPopoverContent: React.FC = () => (
  <Typography
    iconName="logout"
    onClick={() => console.log('logout')}
    size="three"
    text="Logout"
  />
);

export default HeaderNotificationsPopoverContent;
