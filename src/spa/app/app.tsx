import * as React from 'react';
import ErrorBoundary from 'neutrons/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import UserDashboardPage from 'pages/userDashboardPage/userDashboardPage';

// const App: React.FC = () => {
//   return (
//     <Layout>
//       <section
//         style={{
//           alignItems: "center",
//           display: "flex",
//           height: "100%",
//           justifyContent: "center",
//           width: "100%",
//         }}
//       >
//         <h1>hello world</h1>
//       </section>
//         {/*<UserDashboardPage />*/}
//     </Layout>
//   );
// };

const App: React.FC = () => (
  <Layout>
    <h1>test app</h1>
  </Layout>
)

export default App;
