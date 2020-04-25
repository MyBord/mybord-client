import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import App from 'app/app';
import Landing from 'landing/landing';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './spa.module.less';

const variants = {
  app: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 1.0 },
    },
  },
  landing: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.0 },
    },
  },
};

// This component is responsible for delegating what the user should see: if they should see
// the actual app if they are authenticated or if they should see the non-app landing page if
// they are not authenticated
const SpaDelegation: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.spaDiv}
        exit="exit"
        initial="initial"
        key={isAuthenticated ? 'isAuthenticated' : 'notAuthenticated'}
        variants={isAuthenticated ? variants.app : variants.landing}
      >
        <div className={styles.spaDivChild}>
          {
            isAuthenticated
              ? <App />
              : <Landing />
          }
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpaDelegation;
