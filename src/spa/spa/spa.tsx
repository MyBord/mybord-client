import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from './spaProviders';
import SpaContainer from './spaContainer';

// This is the actual final, production React code that instantiates our application. It contains:
//   * A router
//   * Context Providers
//   * Our actual spa application
const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaContainer />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
