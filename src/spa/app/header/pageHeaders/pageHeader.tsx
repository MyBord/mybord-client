import * as React from 'react';
import { useLocation } from 'react-router-dom';
const AboutPageHeader = React.lazy(() => import('./aboutPageHeader/aboutPageHeader'));
const DashboardPageHeader = React.lazy(() => import('./dashboardPageHeader/dashboardPageHeader'));

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  const path = pathname.split('/')[1];
  switch (path) {
    case 'pageOne':
      return <DashboardPageHeader />;
    case 'pageTwo':
      return <AboutPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
