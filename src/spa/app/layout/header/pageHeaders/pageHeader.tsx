import * as React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPageHeader from './dashboardPageHeader/dashboardPageHeader';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/myBord':
      return <DashboardPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
