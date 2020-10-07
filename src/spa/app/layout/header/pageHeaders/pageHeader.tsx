import * as React from 'react';
import { useLocation } from 'react-router-dom';
const AboutPageHeader = React.lazy(() => import('./aboutPageHeader/aboutPageHeader'));
const DashboardPageHeader = React.lazy(() => import('./dashboardPageHeader/dashboardPageHeader'));
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuthenticationContext();

  const path = pathname.split('/')[1];
  switch (path) {
    case currentUser.username:
      return <DashboardPageHeader />;
    case 'about':
      return <AboutPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
