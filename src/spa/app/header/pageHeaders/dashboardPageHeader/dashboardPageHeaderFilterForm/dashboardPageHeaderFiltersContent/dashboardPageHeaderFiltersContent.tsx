import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Toggle from 'inputs/toggle/toggle';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import * as styles from './dashboardPageHeaderFiltersContent.module.less';

const DashboardPageHeaderFiltersContent: React.FC = () => {
  const [userCardsQuery] = useLazyQuery(USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' });
  const { state } = useDashboardCardsContext();

  const handleToggleFavoriteFilter = async (): Promise<void> => {
    await userCardsQuery({
      variables: {
        isFavorite: !state.filters.isFavorite,
        isToDo: state.filters.isToDo,
      },
    });
  };

  const handleToggleToDoFilter = async (): Promise<void> => {
    await userCardsQuery({
      variables: {
        isFavorite: state.filters.isFavorite,
        isToDo: !state.filters.isToDo,
      },
    });
  };

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Toggle
          checked={state.filters.isFavorite}
          onClick={handleToggleFavoriteFilter}
          size="small"
          text="Favorites"
        />
      </li>
      <li className={styles.li}>
        <Toggle
          checked={state.filters.isToDo}
          onClick={handleToggleToDoFilter}
          size="small"
          text="To Do"
        />
      </li>
    </ul>
  );
};

export default DashboardPageHeaderFiltersContent;
