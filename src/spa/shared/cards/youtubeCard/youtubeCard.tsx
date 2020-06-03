import * as React from 'react';
import Card from 'cards/card/card';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';

interface Props {
  cardId: string;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCard: React.FC<Props> = ({ cardId, youtubeVideoData }) => {
  const Content: React.FC = () => (
    <YoutubeCardThumbnailContainer cardId={cardId} youtubeVideoData={youtubeVideoData} />
  );

  const Description: React.FC = () => (
    <YoutubeCardDescription youtubeVideoData={youtubeVideoData} />
  );

  return (
    <Card
      Content={Content}
      Description={Description}
      cardId={cardId}
    />
  );
};

export default YoutubeCard;
