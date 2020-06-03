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
  const [showYoutubePlayer, setShowYoutubePlayer] = React.useState(false);
  const [isYoutubePlayerLoaded, setIsYoutubePlayerLoaded] = React.useState(false);
  const { activeCardId } = useCardContext();

  return (
    <>
      <YoutubePlayerAnimation isYoutubePlayerLoaded={isYoutubePlayerLoaded}>
        <YoutubeCardThumbnailComponent
          cardId={cardId}
          isYoutubePlayerLoaded={isYoutubePlayerLoaded}
          setShowYoutubePlayer={setShowYoutubePlayer}
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
