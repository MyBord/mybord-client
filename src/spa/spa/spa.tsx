import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from './spaProviders';
const App = React.lazy(() => import('app/app'));

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <React.Suspense fallback={<div>loading</div>}>
        <App />
      </React.Suspense>
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
