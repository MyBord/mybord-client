import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import Empty from 'icons/empty/empty';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import Typography from 'typography/typography';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
  UserCard,
  UserCardsQueryResponse,
} from 'schema/card';
import * as styles from './dashboardCards.module.less';

interface Props {
  userCards: UserCardsQueryResponse['userCards'];
}

const DashboardCards: React.FC<Props> = ({ userCards }) => {
  const userCardSubscription = useSubscription(USER_CARD_SUBSCRIPTION);
  const deletedUserCardSubscription = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);
  const userCardsIds = userCards.map((userCard: UserCard) => userCard.id);

  if (
    !deletedUserCardSubscription.loading
    && userCardsIds.includes(deletedUserCardSubscription.data.deletedUserCard.id)
  ) {
    const index = userCardsIds.indexOf(deletedUserCardSubscription.data.deletedUserCard.id);
    userCards.splice(index, 1);
    // userCardsIds.splice(index, 1);
  }

  if (
    !userCardSubscription.loading
    && !userCardsIds.includes(userCardSubscription.data.userCard.id)
  ) {
    userCards.push(userCardSubscription.data.userCard);
    // userCardsIds.push(userCardSubscription.data.userCard.id);
  }

  if (userCards.length > 0) {
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
  }

  return (
    <section className={styles.section}>
      <div className={styles.emptyCard}>
        <Empty />
        <Typography
          color="blue"
          size="three"
          text="You don't have any cards. You should add some."
        />
      </div>
    </section>
  );
};

export default DashboardCards;
