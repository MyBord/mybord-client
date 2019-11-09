import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import gapi from 'google/gapi';
import Routes from './routing/routes';
import * as styles from './spa.module.scss';

const Spa: React.FC = () => {
  React.useEffect(() => {
    gapi();
  });
  return (
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
};

export default Spa;
