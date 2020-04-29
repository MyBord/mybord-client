import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaDelegation from './spaDelegation';
import SpaProviders from './spaProviders';

// This is the actual final, production React code that instantiates our application. It contains:
//   * A router
//   * Context Providers
//   * Our application that delegates what the end user should see (based on things such as
//     whether or not they are authenticated)
const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaDelegation />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
