import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import { GetUserCardsResponse, UserCard } from 'schema/card';
import { USER_CARDS } from 'schema/user';
import * as styles from './dashboardCards.module.less';

interface Props {
  userCards: GetUserCardsResponse['userCards'];
}

const DashboardCards: React.FC<Props> = ({ userCards }) => {
  const { data, loading } = useSubscription(USER_CARDS);

  if (!loading) {
    console.log(data);
  }

  return (
    <section className={styles.section}>
      {
        userCards.map((userCard: UserCard, index: number) => (
          <YoutubeCard
            key={`${userCard.cardData.youtubeCardData.videoId}-${index}`}
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
