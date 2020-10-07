import * as React from 'react';
import NavigationButton from './navigationButton/navigationButton';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';
import * as styles from './navigationButtons.module.less';

const NavigationButtons: React.FC = () => {
  const { currentUser } = useAuthenticationContext();

  return (
    <section className={styles.parentSection}>
      <section className={styles.section}>
        <NavigationButton
          iconName="dashboard"
          link={currentUser.username}
          pageTitle="My Bord"
        />
        <NavigationButton
          iconName="chart"
          link="trending"
          pageTitle="Trending"
        />
        <NavigationButton
          iconName="addUser"
          link="friends"
          pageTitle="Friends"
        />
      </section>
    </section>
  );
};

export default NavigationButtons;
