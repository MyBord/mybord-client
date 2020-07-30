import * as React from 'react';
import loginBackground from 'assets/pictures/loginBackgroundRoad.jpg';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <main>
    <img
      alt="login-form-background"
      className={styles.img}
      src={loginBackground}
    />
    {children}
  </main>
);

export default Layout;
