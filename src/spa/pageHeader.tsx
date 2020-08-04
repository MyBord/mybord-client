import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  const path = pathname.split('/')[1];
  switch (path) {
    case 'pageOne':
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>This is the page one header</h4>
        </div>
      );
    case 'pageTwo':
      return (
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
            <Link to="/pageOne">Page One</Link>
          </div>
          <div style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
            <Link to="/pageThree">Page Three</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4>This is the page two header</h4>
          </div>
        </div>
      );
    case 'pageThree':
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>This is the page three header</h4>
        </div>
      );
    default:
      return null;
  }
};

export default PageHeader;
