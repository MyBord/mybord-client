import * as React from 'react';
import HeaderProfile from './headerProfile/headerProfile';
import PageHeader from './pageHeaders/pageHeader';

const Header: React.FC = () => (
  <div>
    <PageHeader />
    <HeaderProfile />
  </div>
);

export default Header;
