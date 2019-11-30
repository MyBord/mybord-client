import * as React from 'react';
import logo from 'assets/logo.png';
import * as styles from './navigationLogo.module.scss';

const NavigationLogo: React.FC = () => (
  <section className={styles.section}>
    <hr className={styles.hr} />
    <img alt="MyBord logo" className={styles.img} src={logo} />
  </section>
);

export default NavigationLogo;
