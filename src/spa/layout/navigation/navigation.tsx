import * as React from 'react';
import NavigationButton from 'buttons/navigationButton/navigationButton';
import logo from 'assets/logo.png';
import PageIndicator from './pageIndicator/pageIndicator';
import * as styles from './navigation.module.scss';

const Navigation: React.FC = () => (
  <nav className={styles.nav}>
    <section className={styles.logoSection}>
      <img alt="MyBord logo" className={styles.img} src={logo} />
    </section>
    <section className={styles.iconSection}>
      <PageIndicator />
      <NavigationButton
        iconName="dashboard"
        label="Dashboard"
        to=""
      />
      <NavigationButton
        iconName="user"
        label="Following"
        to="following"
      />
      <NavigationButton
        iconName="chart"
        label="Trending"
        to="trending"
      />
    </section>
  </nav>
);

export default Navigation;
