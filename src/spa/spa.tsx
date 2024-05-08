import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from 'context/spaProviders/spaProviders';
import App from 'app/app';
import Landing from 'landing/landing';

// This is the actual final, production React code that instantiates our application. It contains:
//   * A router
//   * Context Providers
//   * Our actual spa application with authentication handling
const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <React.Suspense fallback={<div />}>
        <App />
      </React.Suspense>
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
