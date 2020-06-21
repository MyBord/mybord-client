import * as React from 'react';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const DashboardCardSwitch: React.FC<Props> = ({ userCard }) => {
  switch (userCard.type) {
    case 'Youtube':
      return (
        <YoutubeCard
          key={userCard.id}
          cardId={userCard.id}
          youtubeVideoData={userCard.cardData.youtubeCardData}
        />
      );
    default:
      throw new Error('Invalid user card type.');
  }
};

export default DashboardCardSwitch;
