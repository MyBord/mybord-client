import * as React from 'react';
import { UserCard } from 'schema/card';
import YoutubeCardThumbnailAnimation from 'animations/youtubeCardThumbnailAnimation';
import YoutubePlayer from 'cards/youtubeCard/youtubePlayer/youtubePlayer';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import YoutubeCardThumbnail from './youtubeCardThumbnail';

export interface Props {
  userCard: UserCard;
}

const YoutubeCardContent: React.FC<Props> = ({ userCard }) => {
  const [hasPlayButtonBeenClicked, setHasPlayButtonBeenClicked] = React.useState<boolean>(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState<boolean>(false);
  const { activeCard, canMultiEdit, setActiveCardId } = useMultiSelectCardContext();

  const { id } = userCard;
  const { youtubeCardData } = userCard.cardData;

  const handlePlay = (): void => {
    setActiveCardId(id);
    setHasPlayButtonBeenClicked(true);
  };

  // Show the youtube video if the user has clicked the play button, the user is not in multi-edit
  // mode, and the user is not playing a different video.
  const showYoutubePlayer = hasPlayButtonBeenClicked
    && !canMultiEdit
    && id === activeCard.id;

  // Show the youtube thumbnail if the youtube player has not yet been loaded OR another video
  // is playing OR the user is in multi-edit mode.
  const showYoutubeThumbnail = !isYoutubePlayerLoaded
    || id !== activeCard.id
    || canMultiEdit;

  return (
    <>
      <YoutubeCardThumbnailAnimation showYoutubeThumbnail={showYoutubeThumbnail}>
        <YoutubeCardThumbnail
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          onPlay={handlePlay}
          youtubeVideoData={youtubeCardData}
        />
      </YoutubeCardThumbnailAnimation>
      <YoutubePlayer
        setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
        showYoutubePlayer={showYoutubePlayer}
        youtubeVideoData={youtubeCardData}
      />
    </>
  );
};

export default YoutubeCardContent;
