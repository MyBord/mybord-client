import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import SpaProviders from 'context/spaProviders';
import * as styles from './spa.module.less';

const animationConfig = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 2.5 },
  },
};

const SampleComponent: React.FC = () => {
  const [isWaiting, setIsWaiting] = React.useState(true);
  return (
    <div>
      <button type="button" onClick={() => setIsWaiting(!isWaiting)}>
        {isWaiting ? 'Turn off "Waiting"' : 'Turn on "Waiting"'}
      </button>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate="enter"
          exit="exit"
          initial="initial"
          // @ts-ignore
          key={isWaiting}
          variants={animationConfig}
        >
          {
            isWaiting
              ? <div className={styles.divOne}>Div One</div>
              : <div className={styles.divTwo}>Div Two</div>
          }
        </motion.div>
      </AnimatePresence>
    </div>
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
