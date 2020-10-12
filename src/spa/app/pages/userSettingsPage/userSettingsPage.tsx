import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import UserSettingsPageForm from './userSettingsPageForm/userSettingsPageForm';
import * as styles from './userSettingsPage.module.less';

const UserSettingsPage: React.FC = () => (
  <section className={styles.section}>
    <UserSettingsPageForm />
  </section>
);

export default pageWrapper({ Component: UserSettingsPage });
