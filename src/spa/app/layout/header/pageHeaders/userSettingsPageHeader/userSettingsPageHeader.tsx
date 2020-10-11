import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './userSettingsPageHeader.module.less';

const UserSettingsPageHeader: React.FC = () => (
  <div className={styles.div}>
    <Typography
      color="blue"
      size="five"
      text="My Settings"
    />
  </div>
);

export default UserSettingsPageHeader;
