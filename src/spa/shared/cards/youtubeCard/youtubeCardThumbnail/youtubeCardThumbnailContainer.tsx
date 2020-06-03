import * as React from 'react';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubePlayerAnimation from 'framerMotion/youtubePlayerAnimation';
import { useCardContext } from 'context/cardContext';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';
import YoutubePlayer from '../youtubePlayer/youtubePlayer';

interface Props {
  cardId: string;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ cardId, youtubeVideoData }) => {
  const [hasPlayBeenClicked, setHasPlayBeenClicked] = React.useState(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState(false);
  const { canEdit, setActiveCardId } = useCardContext();

  const handlePlay = (): void => {
    setActiveCardId(cardId);
    setHasPlayBeenClicked(true);
  };

  const showYoutubePlayer = hasPlayBeenClicked && !canEdit;
  return (
    <>
      <YoutubePlayerAnimation isYoutubePlayerLoaded={isYoutubePlayerLoaded}>
        <YoutubeCardThumbnailComponent
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          onPlay={handlePlay}
          youtubeVideoData={youtubeVideoData}
        />
      </YoutubePlayerAnimation>
      {
        showYoutubePlayer
        && (
          <YoutubePlayer
            setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
            youtubeVideoData={youtubeVideoData}
          />
        )
      }
    </>
  );
};

export default YoutubeCardThumbnailContainer;
