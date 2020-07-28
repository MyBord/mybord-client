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
        iconName="about"
        link="about"
        pageTitle="About"
      />
    </section>
  </section>
);

export default NavigationButtons;
