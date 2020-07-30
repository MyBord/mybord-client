import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/app';

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
      <React.Suspense fallback={<Fallback />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </div>
);

export default Spa;
