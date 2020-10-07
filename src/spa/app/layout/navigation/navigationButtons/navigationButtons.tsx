import * as React from 'react';
import NavigationButton from './navigationButton/navigationButton';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import * as styles from './navigationButtons.module.less';

const NavigationButtons: React.FC = () => {
  const { currentUser } = useCurrentUserContext();

  return (
    <section className={styles.parentSection}>
      <section className={styles.section}>
        <NavigationButton
          iconName="userDashboard"
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
