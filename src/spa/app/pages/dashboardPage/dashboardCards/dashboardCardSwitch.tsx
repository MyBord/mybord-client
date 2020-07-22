import * as React from 'react';
const YoutubeCard = React.lazy(() => import('shared/cards/youtubeCard/youtubeCard'));
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const DashboardCardSwitch: React.FC<Props> = ({ userCard }) => {
  switch (userCard.type) {
    case 'Youtube':
      return <YoutubeCard key={userCard.id} userCard={userCard} />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default DashboardCardSwitch;
