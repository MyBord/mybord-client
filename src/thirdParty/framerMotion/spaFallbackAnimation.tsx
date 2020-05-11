import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SpaFallback from 'fallbacks/spaFallback/spaFallback';
import { useHydrationContext } from 'context/hydrationContext';
import { getTwoChildOpacityTransition } from './commonVariants';
import * as styles from './spaFallbackAnimation.module.less';

const SpaFallbackAnimation: React.FC = () => {
  const animationVariants = getTwoChildOpacityTransition(0.5);
  const { isHydrated } = useHydrationContext();
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
