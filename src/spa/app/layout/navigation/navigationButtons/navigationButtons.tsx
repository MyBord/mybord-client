import * as React from 'react';
import NavigationButton from './navigationButton/navigationButton';
import * as styles from './navigationButtons.module.less';

const NavigationButtons: React.FC = () => (
  <section>
    <section className={styles.section}>
      <NavigationButton
        iconName="dashboard"
        link="myBord"
      />
      <NavigationButton
        iconName="chart"
        link="trending"
      />
      <NavigationButton
        iconName="addUser"
        link="following"
      />
      <NavigationButton
        iconName="calendar"
        link="history"
      />
      <NavigationButton
        iconName="mail"
        link="inbox"
      />
      <NavigationButton
        iconName="playlist"
        link="playlist"
      />
      <NavigationButton
        iconName="star"
        link="favorites"
      />
    </section>
  </section>
);

export default NavigationButtons;
