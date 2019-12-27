import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { YoutubeData } from 'types/youtubeTypes';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';
import YoutubePlayer from '../youtubePlayer/youtubePlayer';
import * as styles from './youtubeCardThumbnail.module.scss';

interface Props {
  youtubeVideoData: YoutubeData;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ youtubeVideoData }) => {
  const [showYoutubePlayer, setShowYoutubePlayer] = React.useState(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState(false);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {!isYoutubePlayerLoaded && (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.overlayDiv}
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <YoutubeCardThumbnailComponent
              setShowYoutubePlayer={setShowYoutubePlayer}
              youtubeVideoData={youtubeVideoData}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {
        showYoutubePlayer
        && (
          <YoutubePlayer
            setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
            youtubeVideoData={youtubeVideoData}
          />
        )
      }
    </div>
  );
};

export default YoutubeCardThumbnailContainer;
