import * as React from 'react';
import loginBackground from 'assets/pictures/loginBackgroundRoad.jpg';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    <div className={styles.imgContainer}>
      <img
        alt="login-form-background"
        className={styles.img}
        src={loginBackground}
      />
    </div>
    {children}
    <section className={styles.section}><h1>Section 1</h1></section>
    <section className={styles.section}><h1>Section 2</h1></section>
    <section className={styles.section}><h1>Section 3</h1></section>
    <section className={styles.section}><h1>Section 4</h1></section>
    <section className={styles.section}><h1>Section 5</h1></section>
    <section className={styles.section}><h1>Section 6</h1></section>
    <section className={styles.section}><h1>Section 7</h1></section>
    <section className={styles.section}><h1>Section 8</h1></section>
  </main>
);

export default Layout;
