import * as React from 'react';
import { useLocation } from 'react-router-dom';
const AboutPageHeader = React.lazy(() => import('./aboutPageHeader/aboutPageHeader'));
const UserDashboardPageHeader = React.lazy(
  () => import('./userDashboardPageHeader/userDashboardPageHeader'),
);
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();
  const { currentUser } = useCurrentUserContext();

  const path = pathname.split('/')[1];
  switch (path) {
    case currentUser.username:
      return <UserDashboardPageHeader />;
    case 'about':
      return <AboutPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
