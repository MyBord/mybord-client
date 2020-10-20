import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Dropdown from 'inputs/dropdown/dropdown';
import Toggle from 'inputs/toggle/toggle';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import { dropdownCategoryOptions } from 'mockData/inputsMockData';
import * as styles from './userDashboardPageHeaderFiltersContent.module.less';

const UserDashboardPageHeaderFiltersContent: React.FC = () => {
  const [userCardsQuery] = useLazyQuery(USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' });
  const { state } = useUserDashboardContext();

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
      <li className={styles.li}>
        <Dropdown options={dropdownCategoryOptions} />
      </li>
    </ul>
  );
};

export default UserDashboardPageHeaderFiltersContent;
