// This file creates common routing tooling that is used for our app.

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Redirect,
  RedirectProps,
  Route,
  RouteProps,
} from 'react-router-dom';
import Spinner from 'fallbacks/spinner/spinner';
import * as styles from './routing.module.less';

// ----- VARIANTS ----- //

export const variants = {
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

// ----- MOTION REDIRECT ----- //

export const MotionRedirect: React.FC<RedirectProps> = (props) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

// ----- MOTION ROUTE ----- //

export const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => (
  <Route {...props}>
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
  </Route>
);
