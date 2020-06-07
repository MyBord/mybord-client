import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './youtubePlayerAnimation.module.less';

interface Props {
  children: React.ReactNode;
  showYoutubeThumbnail: boolean;
}

const YoutubePlayerAnimation: React.FC<Props> = ({ children, showYoutubeThumbnail }) => (
  <AnimatePresence>
    {showYoutubeThumbnail && (
    <motion.div
      animate={{ opacity: 1 }}
      className={styles.div}
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
