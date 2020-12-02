import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { motion } from 'framer-motion';
import Spinner from 'fallbacks/spinner/spinner';
import * as styles from './motionRoute.module.less';

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

const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => (
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

export default MotionRoute;
