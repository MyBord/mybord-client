import * as React from 'react';
const ImageCardDescription = React
  .lazy(() => import('cards/imageCard/imageCardDescription/imageCardDescription'));
const YoutubeCardDescription = React
  .lazy(() => import('cards/youtubeCard/youtubeCardDescription/youtubeCardDescription'));
import { UserCard } from 'schema/card';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const CardDescriptionSwitch: React.FC<Props> = ({ isPreview, userCard }) => {
  switch (userCard.type) {
    case 'Image':
      return (
        <ImageCardDescription
          key={userCard.id}
          isPreview={isPreview}
          userCard={userCard}
        />
      );
    case 'Youtube':
      return <YoutubeCardDescription key={userCard.id} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default CardDescriptionSwitch;
