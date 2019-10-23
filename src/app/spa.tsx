import * as React from 'react';
import * as styles from './spa.module.scss';

const Spa: React.FC = () => (
  <>
    <nav className={styles.nav}>
      This is the nav
    </nav>
    <main className={styles.main}>
      <header className={styles.header}>
        This is the header
      </header>
      <section className={styles.section}>
        This is the app
      </section>
    </main>
  </>
);

export default Spa;
