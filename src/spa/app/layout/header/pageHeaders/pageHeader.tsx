import * as React from 'react';
import { useLocation } from 'react-router-dom';
const AboutPageHeader = React.lazy(() => import('./aboutPageHeader/aboutPageHeader'));
const UserDashboardPageHeader = React.lazy(
  () => import('./userDashboardPageHeader/userDashboardPageHeader'),
);
const UserSettingsPageHeader = React.lazy(
  () => import('./userSettingsPageHeader/userSettingsPageHeader'),
);
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

const PageHeader: React.FC = () => {
  // const { pathname } = useLocation();
  const { currentUser } = useCurrentUserContext();

  return <UserDashboardPageHeader />;
  // // const path = pathname.split('/')[1];
  // const path = 'foo';
  // switch (path) {
  //   // case currentUser.username:
  //   case 'foo':
  //     return <UserDashboardPageHeader />;
  //   case 'about':
  //     return <AboutPageHeader />;
  //   case 'settings':
  //     return <UserSettingsPageHeader />;
  //   default:
  //     return null;
  // }
};

export default PageHeader;
