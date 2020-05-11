import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SpaFallback from 'fallbacks/spaFallback/spaFallback';
import { getTwoChildOpacityTransition } from './commonVariants';
import * as styles from './spaFallbackAnimation.module.less';

interface Props {
  isHydrated: boolean;
}

// ToDo: use context

const SpaFallbackAnimation: React.FC<Props> = ({ isHydrated }) => {
  const animationVariants = getTwoChildOpacityTransition(0.5);
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.div}
        exit="exit"
        initial="initial"
        key={isHydrated ? 'hydrated' : 'hydrating'}
        variants={
          isHydrated ? animationVariants.lastChild : animationVariants.firstChild
        }
      >
        {
          !isHydrated && <SpaFallback />
        }
      </motion.div>
    </AnimatePresence>
  );
};

export default SpaFallbackAnimation;
