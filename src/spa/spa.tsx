import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from 'context/spaProviders';
import App from 'app/app';

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <App />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
//
//
// import * as React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import ErrorBoundary from 'app/errorBoundary/errorBoundary';
// import LandingPage from 'pages/landingPage/landingPage';
// import SpaProviders from 'context/spaProviders';
// import { useAuthenticationContext } from 'context/authenticationContext';
//
// const Spa: React.FC = () => {
//   const { userAuthentication } = useAuthenticationContext();
//   console.log(userAuthentication);
//
//   return (
//     <BrowserRouter>
//       <ErrorBoundary>
//         <SpaProviders>
//           {
//             userAuthentication.isAuthenticated
//               ? <h1>logged in</h1>
//               : <LandingPage />
//           }
//         </SpaProviders>
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };
//
// export default Spa;
