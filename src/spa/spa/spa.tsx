import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from './spaProviders';
const App = React.lazy(() => import('app/app'));

const Fallback: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      background: 'red',
      display: 'flex',
      height: '30rem',
      justifyContent: 'center',
      width: '30rem',
    }}
  >
    <h1 style={{ color: 'white' }}>LOADING</h1>
  </div>
);

const Spa: React.FC = () => (
  <div style={{ margin: '2rem' }}>
    <BrowserRouter>
      <SpaProviders>
        <React.Suspense fallback={<Fallback />}>
          <App />
        </React.Suspense>
      </SpaProviders>
    </BrowserRouter>
  </div>
);

export default Spa;
