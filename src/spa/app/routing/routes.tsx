import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import CantPage from 'pages/cantPage/cantPage';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import ErrorPage from 'pages/errorPage/errorPage';
import FavoritesPage from 'pages/favoritesPage/favoritesPage';
import FollowingPage from 'pages/followingPage/followingPage';
import HistoryPage from 'pages/historyPage/historyPage';
import InboxPage from 'pages/inboxPage/inboxPage';
import PlaylistPage from 'pages/playlistPage/playlistPage';
import TrendingPage from 'pages/trendingPage/trendingPage';
import { MotionRedirect, MotionRoute } from 'utils/routing';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* ----- REDIRECTS ----- */}
        <MotionRoute exact path="/">
          <MotionRedirect to="/myBord" />
        </MotionRoute>
        <MotionRoute exact path="/login">
          <MotionRedirect to="/myBord" />
        </MotionRoute>
        {/* ----- PAGES ----- */}
        <MotionRoute exact path="/404">
          <CantPage />
        </MotionRoute>
        <MotionRoute exact path="/error">
          <ErrorPage />
        </MotionRoute>
        <MotionRoute exact path="/favorites">
          <FavoritesPage />
        </MotionRoute>
        <MotionRoute exact path="/following">
          <FollowingPage />
        </MotionRoute>
        <MotionRoute exact path="/history">
          <HistoryPage />
        </MotionRoute>
        <MotionRoute exact path="/inbox">
          <InboxPage />
        </MotionRoute>
        <MotionRoute exact path="/myBord">
          <DashboardPage />
        </MotionRoute>
        <MotionRoute exact path="/playlist">
          <PlaylistPage />
        </MotionRoute>
        <MotionRoute exact path="/trending">
          <TrendingPage />
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
