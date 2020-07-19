import * as React from 'react';
import NavigationButton from './navigationButton/navigationButton';
import * as styles from './navigationButtons.module.less';

const NavigationButtons: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <NavigationButton
        iconName="dashboard"
        link="myBord"
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

export default NavigationButtons;
