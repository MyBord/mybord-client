import * as React from 'react';
import { useLocation } from 'react-router-dom';
import PageOneHeader from './pageOneHeader';
import PageTwoHeader from './pageTwoHeader';
import PageThreeHeader from './pageThreeHeader';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  const path = pathname.split('/')[1];
  switch (path) {
    case 'pageOne':
      return <PageOneHeader />;
    case 'pageTwo':
      return <PageTwoHeader />;
    case 'pageThree':
      return <PageThreeHeader />;
    default:
      return null;
  }
};

export default PageHeader;
