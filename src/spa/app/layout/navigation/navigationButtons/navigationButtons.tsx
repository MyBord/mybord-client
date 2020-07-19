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
      <NavigationButton
        iconName="calendar"
        link="history"
        pageTitle="History"
      />
      <NavigationButton
        iconName="mail"
        link="inbox"
        pageTitle="Mail"
      />
      <NavigationButton
        iconName="playlist"
        link="playlist"
        pageTitle="Playlist"
      />
      <NavigationButton
        iconName="star"
        link="favorites"
        pageTitle="Favorites"
      />
    </section>
  </section>
);

export default NavigationButtons;
