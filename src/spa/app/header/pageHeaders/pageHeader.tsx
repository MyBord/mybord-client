import * as React from 'react';
import { useLocation } from 'react-router-dom';
const AboutPageHeader = React.lazy(() => import('./aboutPageHeader/aboutPageHeader'));
import PageOneHeader from './pageOneHeader';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  const path = pathname.split('/')[1];
  switch (path) {
    case 'pageOne':
      return <PageOneHeader />;
    case 'pageTwo':
      return <AboutPageHeader />;
    default:
      return null;
  }
};

export default PageHeader;
