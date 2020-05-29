import * as React from 'react';
import Card from 'cards/card/card';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';

interface Props {
  id: string;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCard: React.FC<Props> = ({ id, youtubeVideoData }) => {
  const Content: React.FC = () => (
    <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoData} />
  );

  const Description: React.FC = () => (
    <YoutubeCardDescription youtubeVideoData={youtubeVideoData} />
  );

  return (
    <Card
      Content={Content}
      Description={Description}
      id={id}
    />
  );
};

export default YoutubeCard;
