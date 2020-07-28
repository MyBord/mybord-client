import * as React from 'react';
import { Switch, useLocation } from 'react-router-dom';
const AboutPage = React.lazy(() => import('pages/aboutPage/aboutPage'));
const DashboardPage = React.lazy(() => import('pages/dashboardPage/dashboardPage'));
const TrendingPage = React.lazy(() => import('pages/trendingPage/trendingPage'));
import { MotionRoute } from 'utils/routing';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <MotionRoute exact path="/about">
        <AboutPage />
      </MotionRoute>
      <MotionRoute exact path="/myBord">
        <DashboardPage />
      </MotionRoute>
      <MotionRoute exact path="/trending">
        <TrendingPage />
      </MotionRoute>
    </Switch>
  );
};

export default Routes;
