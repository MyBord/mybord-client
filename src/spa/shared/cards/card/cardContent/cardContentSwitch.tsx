import * as React from 'react';
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
    case 'Image':
      return <ImageCardContent key={userCard.id} userCard={userCard} />;
    case 'Youtube':
      return <YoutubeCardContent key={userCard.id} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default CardContentSwitch;
