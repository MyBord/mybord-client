import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './spaFallbackAnimation.module.less';

const variants = {
  hydrated: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
  hydrating: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
};

interface Props {
  children: React.ReactNode;
}

// See *1 and *2 in `hydrationContext.tsx`
const SpaFallbackAnimation: React.FC<Props> = ({ children }) => {
  const { isAnimationComplete, isHydrated } = useHydrationContext();
  const shouldRender = !isAnimationComplete || !isHydrated;
  return (
    <AnimatePresence>
      {
        shouldRender && (
          <motion.div
            animate="enter"
            className={styles.div}
            exit="exit"
            initial="initial"
            key={shouldRender ? 'hydrated' : 'hydrating'}
            variants={shouldRender ? variants.hydrated : variants.hydrating}
          >
            {children}
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default SpaFallbackAnimation;
