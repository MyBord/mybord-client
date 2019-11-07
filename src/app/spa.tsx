import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import Routes from './routing/routes';
import * as styles from './spa.module.scss';

const Spa: React.FC = () => (
  <>
    <Navigation />
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <Routes />
      </section>
    </main>
  </>
);

export default Spa;
