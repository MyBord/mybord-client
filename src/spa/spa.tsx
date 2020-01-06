import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import Layout from 'layout/layout';

const Spa: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Layout>
  </BrowserRouter>
);

export default Spa;
//
// import * as React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import LandingPage from 'pages/landingPage/landingPage';
// import ErrorBoundary from 'app/errorBoundary/errorBoundary';
//
// const Spa: React.FC = () => (
//   <BrowserRouter>
//     <ErrorBoundary>
//       <LandingPage />
//     </ErrorBoundary>
//   </BrowserRouter>
// );
//
// export default Spa;
