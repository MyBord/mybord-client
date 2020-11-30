import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
const AboutDevPage = React.lazy(() => import('pages/aboutDevPage/aboutDevPage'));
const AboutPage = React.lazy(() => import('pages/aboutPage/aboutPage'));
const CantPage = React.lazy(() => import('pages/cantPage/cantPage'));
const ErrorPage = React.lazy(() => import('pages/errorPage/errorPage'));
const FriendsPage = React.lazy(() => import('pages/friendsPage/friendsPage'));
const TrendingPage = React.lazy(() => import('pages/trendingPage/trendingPage'));
const UserDashboardPage = React.lazy(() => import('pages/userDashboardPage/userDashboardPage'));
const UserSettingsPage = React.lazy(() => import('pages/userSettingsPage/userSettingsPage'));
import MotionRedirect from 'neutrons/routing/motionRedirect';
import MotionRoute from 'neutrons/routing/motionRoute';

interface Props {
  username: string;
}

const Routes: React.FC<Props> = ({ username }) => {
  const usernamePath = `/${username}`;
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* ----- REDIRECTS ----- */}
        <MotionRoute exact path="/">
          <MotionRedirect to={usernamePath} />
        </MotionRoute>
        <MotionRoute exact path="/login">
          <MotionRedirect to={usernamePath} />
        </MotionRoute>
        {/* ----- PAGES ----- */}
        <MotionRoute exact path="/404">
          <CantPage />
        </MotionRoute>
        <MotionRoute exact path="/about">
          <AboutPage />
        </MotionRoute>
        <MotionRoute exact path="/about/dev">
          <AboutDevPage />
        </MotionRoute>
        <MotionRoute exact path="/error">
          <ErrorPage />
        </MotionRoute>
        <MotionRoute exact path="/friends">
          <FriendsPage />
        </MotionRoute>
        <MotionRoute exact path="/settings">
          <UserSettingsPage />
        </MotionRoute>
        <MotionRoute exact path="/trending">
          <TrendingPage />
        </MotionRoute>
        <MotionRoute exact path={usernamePath}>
          <UserDashboardPage />
        </MotionRoute>
        {/* ----- CATCH ALL ----- */}
        <MotionRoute path="/*">
          <MotionRedirect to="/404" />
        </MotionRoute>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
