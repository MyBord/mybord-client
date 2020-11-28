import * as React from 'react';
const GifCard = React.lazy(() => import('cards/gifCard/gifCard'));
const ImageCard = React.lazy(() => import('cards/imageCard/imageCard'));
const YoutubeCard = React.lazy(() => import('cards/youtubeCard/youtubeCard'));
import { UserCard } from 'schema/card';

interface Props {
  isPreview?: boolean;
  userCard: UserCard;
}

const Card: React.FC<Props> = ({ isPreview = false, userCard }) => {
  switch (userCard.type) {
    case 'Gif':
      return <GifCard key={userCard.id} isPreview={isPreview} userCard={userCard} />;
    case 'Image':
      return <ImageCard key={userCard.id} isPreview={isPreview} userCard={userCard} />;
    case 'Youtube':
      return <YoutubeCard key={userCard.id} isPreview={isPreview} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default Card;
