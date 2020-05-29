import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './animations.module.less';

interface Props {
  children: React.ReactNode;
  isYoutubePlayerLoaded: boolean;
}

const YoutubePlayerAnimation: React.FC<Props> = ({ children, isYoutubePlayerLoaded }) => (
  <AnimatePresence>
    {!isYoutubePlayerLoaded && (
    <motion.div
      animate={{ opacity: 1 }}
      className={styles.youtubePlayer}
      id="foo" // todo change name
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
    )}
  </AnimatePresence>
);

export default YoutubePlayerAnimation;
