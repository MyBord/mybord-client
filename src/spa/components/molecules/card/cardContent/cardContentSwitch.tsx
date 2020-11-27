import * as React from 'react';
const GifCardContent = React
  .lazy(() => import('cards/gifCard/gifCardContent/gifCardContent'));
const ImageCardContent = React
  .lazy(() => import('cards/imageCard/imageCardContent/imageCardContent'));
const YoutubeCardContent = React
  .lazy(() => import('cards/youtubeCard/youtubeCardContent/youtubeCardContent'));
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const CardContentSwitch: React.FC<Props> = ({ userCard }) => {
  switch (userCard.type) {
    case 'Gif':
      return <GifCardContent key={userCard.id} userCard={userCard} />;
    case 'Image':
      return <ImageCardContent key={userCard.id} userCard={userCard} />;
    case 'Youtube':
      return <YoutubeCardContent key={userCard.id} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default CardContentSwitch;
