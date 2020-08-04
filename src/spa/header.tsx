import * as React from 'react';
import HeaderModal from './headerModal';
import PageHeader from './pageHeader';

const Header: React.FC = () => (
  <div style={{ display: 'flex', marginBottom: '3rem' }}>
    <PageHeader />
    <HeaderModal />
  </div>
);

export default Header;
