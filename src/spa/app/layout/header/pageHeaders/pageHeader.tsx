import * as React from 'react';
import { useLocation } from 'react-router-dom';
import AboutPageHeader from './aboutPageHeader/aboutPageHeader';
import DashboardPageHeader from './dashboardPageHeader/dashboardPageHeader';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/myBord':
      return <DashboardPageHeader />;
    case '/about':
      return <AboutPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
