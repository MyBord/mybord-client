// eslint-disable-next-line react/jsx-filename-extension
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import UserDashboardPageComponent from './userDashboardPageComponent';

export default pageWrapper({
  Component: UserDashboardPageComponent,
  setHydration: false,
});
