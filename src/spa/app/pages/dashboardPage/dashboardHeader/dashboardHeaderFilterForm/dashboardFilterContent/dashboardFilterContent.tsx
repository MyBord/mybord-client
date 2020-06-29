import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Toggle from 'inputs/toggle/toggle';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import { useDashboardFilterContext } from 'context/dashboardFilterContext/dashboardFilterContext';
import * as styles from './dashboardFilterContent.module.less';

const DashboardFilterContent: React.FC = () => {
  const {
    isFavorite,
    isToDo,
    setIsFavorite,
    setIsToDo,
  } = useDashboardFilterContext();
  const [userCardsQuery] = useLazyQuery(USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' });

  const handleToggleFavoriteFilter = async (): Promise<void> => {
    setIsFavorite((prevState) => !prevState);
    await userCardsQuery({
      variables: {
        isFavorite: !isFavorite,
        isToDo,
      },
    });
  };

  const handleToggleToDoFilter = async (): Promise<void> => {
    setIsToDo((prevState) => !prevState);
    await userCardsQuery({
      variables: {
        isFavorite,
        isToDo: !isToDo,
      },
    });
  };

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Toggle
          checked={isFavorite}
          onClick={handleToggleFavoriteFilter}
          size="small"
          text="Favorites"
        />
      </li>
      <li className={styles.li}>
        <Toggle
          checked={isToDo}
          onClick={handleToggleToDoFilter}
          size="small"
          text="To Do"
        />
      </li>
    </ul>
  );
};

export default DashboardFilterContent;
