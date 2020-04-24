import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from 'context/spaProviders';
import App from 'app/app';
import Landing from 'landing/landing';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './spa.module.less';

const animationConfig = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 10.0 },
  },
};

const SampleComponent: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.spaDiv}
        exit="exit"
        initial="initial"
        key={isAuthenticated ? 'isAuthenticated' : 'notAuthenticated'}
        variants={animationConfig}
      >
        {
          isAuthenticated
            ? <App />
            : <Landing />
        }
      </motion.div>
    </AnimatePresence>
  );
};

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SampleComponent />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
