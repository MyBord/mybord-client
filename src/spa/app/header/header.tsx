import * as React from 'react';
import HeaderModal from './headerModal';
import PageHeader from './pageHeader';

const Header: React.FC = () => (
  <div>
    <PageHeader />
    <HeaderModal />
  </div>
);

export default Header;
