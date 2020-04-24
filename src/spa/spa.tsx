import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from 'context/spaProviders';
import SpaDelegation from './spaDelegation';

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaDelegation />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
