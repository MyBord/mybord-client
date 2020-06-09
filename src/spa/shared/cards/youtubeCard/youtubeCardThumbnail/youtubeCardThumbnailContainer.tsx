import * as React from 'react';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubeThumbnailAnimation from 'framerMotion/youtubeThumbnailAnimation';
import YoutubePlayerContainer from 'cards/youtubeCard/youtubePlayer/youtubePlayerContainer';
import { useCardContext } from 'context/cardContext';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';

interface Props {
  cardId: string;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ cardId, youtubeVideoData }) => {
  const [hasPlayButtonBeenClicked, setHasPlayButtonBeenClicked] = React.useState<boolean>(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState<boolean>(false);
  const { activeCardId, canMultiEdit, setActiveCardId } = useCardContext();

  const handlePlay = (): void => {
    setActiveCardId(cardId);
    setHasPlayButtonBeenClicked(true);
  };

  // Show the youtube video if the user has clicked the play button, the user is not in multi-edit
  // mode, and the user is not playing a different video.
  const showYoutubePlayer = hasPlayButtonBeenClicked
    && !canMultiEdit
    && cardId === activeCardId;

  // Show the youtube thumbnail if the youtube player has not yet been loaded OR another video
  // is playing OR the user is in multi-edit mode.
  const showYoutubeThumbnail = !isYoutubePlayerLoaded
    || cardId !== activeCardId
    || canMultiEdit;

  return (
    <>
      <YoutubeThumbnailAnimation showYoutubeThumbnail={showYoutubeThumbnail}>
        <YoutubeCardThumbnailComponent
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          onPlay={handlePlay}
          youtubeVideoData={youtubeVideoData}
        />
      </YoutubeThumbnailAnimation>
      <YoutubePlayerContainer
        setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
        showYoutubePlayer={showYoutubePlayer}
        youtubeVideoData={youtubeVideoData}
      />
    </>
  );
};

export default YoutubeCardThumbnailContainer;
