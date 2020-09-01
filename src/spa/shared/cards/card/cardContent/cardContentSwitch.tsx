import * as React from 'react';
const YoutubeCardContent = React.lazy(() => (
  import('shared/cards/youtubeCard/youtubeCardContent/youtubeCardContent')));
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const CardContentSwitch: React.FC<Props> = ({ userCard }) => {
  switch (userCard.type) {
    case 'Youtube':
      return <YoutubeCardContent key={userCard.id} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default CardContentSwitch;
