import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  const path = pathname.split('/')[1];
  switch (path) {
    case 'pageOne':
      return <h2>This is the page one header</h2>;
    case 'pageTwo':
      return (
        <div>
          <Link to="/pageOne">Page One</Link>
          <Link to="/pageThree">Page Three</Link>
        </div>
      );
    case 'pageThree':
      return <h2>This is the page three header</h2>;
    default:
      return null;
  }
};

export default PageHeader;
