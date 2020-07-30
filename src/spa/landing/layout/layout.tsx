import * as React from 'react';
import loginBackground from 'assets/pictures/loginBackgroundRoad.jpg';
import LoginPage from './loginForm/loginPage';
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
      <LoginPage />
    </div>
    {children}
    <section className={styles.section} />
  </main>
);

export default Layout;
