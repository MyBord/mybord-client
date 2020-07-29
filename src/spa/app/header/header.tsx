import * as React from 'react';
import HeaderProfile from './headerProfile/headerProfile';
import PageHeader from './pageHeaders/pageHeader';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <header className={styles.header}>
    <PageHeader />
    <HeaderProfile />
  </header>
);

export default Header;
