import * as React from 'react';
import { UserCard } from 'schema/card';
import YoutubeThumbnailAnimation from 'framerMotion/youtubeThumbnailAnimation';
import YoutubePlayerContainer from 'cards/youtubeCard/youtubePlayer/youtubePlayerContainer';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';

interface Props {
  userCard: UserCard;
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({ userCard }) => {
  const [hasPlayButtonBeenClicked, setHasPlayButtonBeenClicked] = React.useState<boolean>(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState<boolean>(false);
  const { activeCard, canMultiEdit, setActiveCardId } = useMultiSelectCardContext();

  const handlePlay = (): void => {
    setActiveCardId(userCard.id);
    setHasPlayButtonBeenClicked(true);
  };

  // Show the youtube video if the user has clicked the play button, the user is not in multi-edit
  // mode, and the user is not playing a different video.
  const showYoutubePlayer = hasPlayButtonBeenClicked
    && !canMultiEdit
    && userCard.id === activeCard.id;

  // Show the youtube thumbnail if the youtube player has not yet been loaded OR another video
  // is playing OR the user is in multi-edit mode.
  const showYoutubeThumbnail = !isYoutubePlayerLoaded
    || userCard.id !== activeCard.id
    || canMultiEdit;

  return (
    <>
      <YoutubeThumbnailAnimation showYoutubeThumbnail={showYoutubeThumbnail}>
        <YoutubeCardThumbnailComponent
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          onPlay={handlePlay}
          youtubeVideoData={userCard.cardData.youtubeCardData}
        />
      </YoutubeThumbnailAnimation>
      <YoutubePlayerContainer
        setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
        showYoutubePlayer={showYoutubePlayer}
        youtubeVideoData={userCard.cardData.youtubeCardData}
      />
    </>
  );
};

export default YoutubeCardThumbnailContainer;
