import * as React from 'react';
import { UserCard } from 'schema/card';
import YoutubeThumbnailAnimation from 'framerMotion/youtubeThumbnailAnimation';
import YoutubePlayer from 'cards/youtubeCard/youtubePlayer/youtubePlayer';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import YoutubeCardThumbnailComponent from './youtubeCardThumbnailComponent';
import * as styles from './youtubeCardThumbnail.module.less';

export interface Props {
  id: UserCard['id'];
  youtubeCardData: UserCard['cardData']['youtubeCardData'];
}

const YoutubeCardThumbnailContainer: React.FC<Props> = ({
  id,
  youtubeCardData,
}) => {
  const [hasPlayButtonBeenClicked, setHasPlayButtonBeenClicked] = React.useState<boolean>(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState<boolean>(false);
  const { activeCard, canMultiEdit, setActiveCardId } = useMultiSelectCardContext();

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
    <div className={styles.container}>
      <YoutubeThumbnailAnimation showYoutubeThumbnail={showYoutubeThumbnail}>
        <YoutubeCardThumbnailComponent
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          onPlay={handlePlay}
          youtubeVideoData={youtubeCardData}
        />
      </YoutubeThumbnailAnimation>
      <YoutubePlayer
        setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
        showYoutubePlayer={showYoutubePlayer}
        youtubeVideoData={youtubeCardData}
      />
    </div>
  );
};

export default YoutubeCardThumbnailContainer;
