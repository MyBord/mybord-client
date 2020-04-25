import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import SpaProviders from 'context/spaProviders';
import SpaDelegation from './spaDelegation';

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaDelegation />
    </SpaProviders>
  </BrowserRouter>
);

// const Spa: React.FC = () => (
//   <BrowserRouter>
//     <SpaProviders>
//       <App />
//     </SpaProviders>
//   </BrowserRouter>
// );

export default Spa;
