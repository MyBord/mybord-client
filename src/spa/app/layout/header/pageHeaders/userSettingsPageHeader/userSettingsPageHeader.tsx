import * as React from 'react';
import TypographyPageTitle from 'typography/typographyPageTitle/typographyPageTitle';
import * as styles from './userSettingsPageHeader.module.less';

const UserSettingsPageHeader: React.FC = () => (
  <div className={styles.div}>
    <TypographyPageTitle text="My Settings" />
  </div>
);

export default UserSettingsPageHeader;
