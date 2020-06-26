import * as React from 'react';
import Empty from 'icons/empty/empty';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import Typography from 'typography/typography';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import DashboardCardSwitch from './dashboardCardSwitch';
import * as styles from './dashboardCards.module.less';

const DashboardCardsComponent: React.FC = () => {
  const { state } = useDashboardCardsContext();

  if (state.allIds.length > 0) {
    return (
      <section className={styles.section}>
        {
          state.allIds.map((userCardId: string) => (
            <DashboardCardSwitch userCard={state.byId[userCardId]} />
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

export default DashboardCardsComponent;
