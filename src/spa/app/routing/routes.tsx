import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import AboutDevPage from 'pages/aboutDevPage/aboutDevPage';
import AboutPage from 'pages/aboutPage/aboutPage';
import CantPage from 'pages/cantPage/cantPage';
import ErrorPage from 'pages/errorPage/errorPage';
import FriendsPage from 'pages/friendsPage/friendsPage';
import TrendingPage from 'pages/trendingPage/trendingPage';
import UserDashboardPage from 'pages/userDashboardPage/userDashboardPage';
import UserSettingsPage from 'pages/userSettingsPage/userSettingsPage';
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
