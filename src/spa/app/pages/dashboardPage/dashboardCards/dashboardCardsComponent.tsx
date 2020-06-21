import * as React from 'react';
import Empty from 'icons/empty/empty';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import Typography from 'typography/typography';
import { UserCard, UserCardsQueryResponse } from 'schema/card';
import DashboardCardSwitch from './dashboardCardSwitch';
import * as styles from './dashboardCards.module.less';

interface Props {
  userCards: UserCardsQueryResponse['userCards'];
}

const DashboardCardsComponent: React.FC<Props> = ({ userCards }) => {
  if (userCards.length > 0) {
    return (
      <section className={styles.section}>
        {
          userCards.map((userCard: UserCard) => <DashboardCardSwitch userCard={userCard} />)
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

export default DashboardCardsComponent;
