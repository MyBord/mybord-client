import * as React from 'react';
import EmptyCard from 'molecules/emptyCard/emptyCard';
import PhantomCard from 'molecules/phantomCard/phantomCard';
import UserCard from 'userCard/userCard';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import * as styles from './userDashboardCards.module.less';

const UserDashboardCards: React.FC = () => {
  const { state } = useUserDashboardContext();

  if (state.allIds.length > 0) {
    return (
      <section className={styles.section}>
        {
          state.allIds.map((userCardId: string) => (
            <UserCard key={userCardId} userCardData={state.byId[userCardId]} />
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
      <EmptyCard hasFilters={state.filters.hasFilters} />
    </section>
  );
};

export default UserDashboardCards;
