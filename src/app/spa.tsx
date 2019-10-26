import * as React from 'react';
import Header from 'header/header';
import HomePage from 'pages/homePage/homePage';
import Navigation from 'navigation/navigation';
import * as styles from './spa.module.scss';

const Spa: React.FC = () => (
  <>
    <Navigation />
    <main className={styles.main}>
      <Header />
      <HomePage />
    </main>
  </>
);

export default Spa;
