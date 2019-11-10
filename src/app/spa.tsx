import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import Routes from './routing/routes';
import { BrowserRouter } from 'react-router-dom';
import init from './init/init';
import * as styles from './spa.module.scss';

const Spa: React.FC = () => (
  <BrowserRouter>
    <Navigation />
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <Routes />
      </section>
    </main>
  </BrowserRouter>
);

export default init(Spa);
