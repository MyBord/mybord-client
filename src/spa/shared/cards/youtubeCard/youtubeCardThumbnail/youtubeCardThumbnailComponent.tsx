import * as React from 'react';
import PlayButton from 'buttons/playButton/playButton';
import Typography from 'typography/typography';
import { YoutubeVideoData } from 'types/youtubeTypes';
import { useCardContext } from 'context/cardContext';
import * as styles from './youtubeCardThumbnail.module.less';

interface Props {
  cardId: string;
  isYoutubePlayerLoaded: boolean;
  setShowYoutubePlayer?: (showYoutubePlayer: boolean) => void;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnailComponent: React.FC<Props> = ({
  cardId,
  isYoutubePlayerLoaded,
  setShowYoutubePlayer,
  youtubeVideoData,
}) => {
  const { activeCardId, canEdit, setActiveCardId } = useCardContext();

  const handleClick = (): void => {
    setActiveCardId(cardId);
    setShowYoutubePlayer(true);
  };

  return (
    <>
      <img
        alt="video thumbnail"
        className={styles.img}
        src={youtubeVideoData.videoThumbnail}
      />
      {
        setShowYoutubePlayer && !canEdit && activeCardId !== cardId
        && (
          <div className={[styles.playButtonDiv, 'card-youtube-play-button'].join(' ')}>
            <PlayButton
              onClick={handleClick}
              shouldSpin={!isYoutubePlayerLoaded}
            />
          </div>
        )
      }
      <div className={styles.durationDiv}>
        <Typography
          color="white"
          font="roboto"
          size="one"
          text={youtubeVideoData.duration}
          weight="light"
        />
      </div>
    </>
  );
};

export default YoutubeCardThumbnailComponent;
