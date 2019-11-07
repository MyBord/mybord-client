import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import CantPage from 'pages/cantPage/cantPage';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import FollowingPage from 'pages/followingPage/followingPage';
import Spinner from 'icons/spinner/spinner';
import TrendingPage from 'pages/trendingPage/trendingPage';
import * as styles from './routes.module.scss';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

interface Props {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<Props> = ({ children }) => (
  <React.Suspense fallback={<Spinner />}>
    <motion.section
      animate="enter"
      className={styles.section}
      exit="exit"
      initial="initial"
      variants={variants}
    >
      {children}
    </motion.section>
  </React.Suspense>
);

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <RouteWrapper>
            <DashboardPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/trending">
          <RouteWrapper>
            <TrendingPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/following">
          <RouteWrapper>
            <FollowingPage />
          </RouteWrapper>
        </Route>
        <Route path="/*">
          <RouteWrapper>
            <CantPage />
          </RouteWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
