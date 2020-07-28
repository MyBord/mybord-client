import * as React from 'react';
import HeaderProfile from './headerProfile/headerProfile';
import PageHeader from './pageHeaders/pageHeader';
import HeaderAnimation from 'framerMotion/headerAnimation';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <header className={styles.header}>
    <HeaderAnimation>
      <PageHeader />
      <HeaderProfile />
    </HeaderAnimation>
  </header>
);

export default Header;
