import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import usePrevious from 'hooks/usePrevious';
import * as styles from './youtubeCardThumbnailAnimation.module.less';

const variants = {
  firstAnimation: {
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
    initial: { opacity: 1 },
  },
  subsequentAnimations: {
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
    enter: {
      opacity: 1,
      transition: { duration: 1 },
    },
    initial: { opacity: 0 },
  },
};

interface Props {
  children: React.ReactNode;
  showYoutubeThumbnail: boolean;
}

const YoutubeCardThumbnailAnimation: React.FC<Props> = ({ children, showYoutubeThumbnail }) => {
  const [hasBeenAnimated, setHasBeenAnimated] = React.useState(false);
  const prevShow = usePrevious(showYoutubeThumbnail);

  React.useEffect(() => {
    if (prevShow !== showYoutubeThumbnail) {
      setHasBeenAnimated(true);
    }
  }, [prevShow, showYoutubeThumbnail]);

  return (
    <AnimatePresence>
      {showYoutubeThumbnail && (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          key={showYoutubeThumbnail ? 'show' : 'hide'}
          variants={hasBeenAnimated ? variants.subsequentAnimations : variants.firstAnimation}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default YoutubeCardThumbnailAnimation;
