import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from './spaProviders';
import SpaAuthentication from './spaAuthentication';

// This is the actual final, production React code that instantiates our application. It contains:
//   * A router
//   * Context Providers
//   * Our actual spa application with authentication handling
const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaAuthentication />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
