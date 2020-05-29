import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import { UserCardsQueryResponse, UserCard, USER_CARD_SUBSCRIPTION } from 'schema/card';
import * as styles from './dashboardCards.module.less';

interface Props {
  userCards: UserCardsQueryResponse['userCards'];
}

const DashboardCards: React.FC<Props> = ({ userCards }) => {
  const { data, loading } = useSubscription(USER_CARD_SUBSCRIPTION);

  if (!loading) {
    userCards.push(data.userCard);
  }

  return (
    <section className={styles.section}>
      {
        userCards.map((userCard: UserCard) => (
          <YoutubeCard
            key={userCard.id}
            cardId={userCard.id}
            youtubeVideoData={userCard.cardData.youtubeCardData}
          />
        ))
      }
      {
        // we create some phantom cards that do not appear visible but are rendered so that we can
        // `justify-content: center` our flexbox card content while having our last row be
        // left-aligned.
        Array(10).fill(null).map((value, index) => <PhantomCard key={`phantom-card-${index}`} />)
      }
    </section>
  );
};

export default DashboardCards;
