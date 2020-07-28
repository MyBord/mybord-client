import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from './spaProviders';
const App = React.lazy(() => import('app/app'));

const Fallback: React.FC = () => (
  <div
    style={{
      background: 'red',
      height: '30rem',
      width: '30rem',
    }}
  >
    LOADING
  </div>
);

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <React.Suspense fallback={<Fallback />}>
        <App />
      </React.Suspense>
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
