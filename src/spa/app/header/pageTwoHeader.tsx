import * as React from 'react';
import { Link } from 'react-router-dom';

const PageTwoHeader: React.FC = () => (
  <div>
    <Link to="/pageOne">Page One</Link>
    <Link to="/pageThree">Page Three</Link>
  </div>
);

export default PageTwoHeader;
