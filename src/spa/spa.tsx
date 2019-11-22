import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import Layout from 'layout/layout';

const Spa: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
);

export default Spa;
