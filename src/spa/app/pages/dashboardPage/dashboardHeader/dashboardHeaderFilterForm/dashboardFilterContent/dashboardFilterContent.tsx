import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Toggle from 'inputs/toggle/toggle';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import * as styles from './dashboardFilterContent.module.less';

const DashboardFilterContent: React.FC = () => {
  const [isFavoriteFilter, setIsFavoriteFilter] = React.useState<boolean>(false);
  const [isToDoFilter, setIsToDoFilter] = React.useState<boolean>(false);
  const [userCardsQuery, { called, data, loading }] = useLazyQuery(
    USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' },
  );

  if (called && !loading) {
    console.log('-----------');
    console.log(data);
    console.log('-----------');
  }

  const handleQuery = async (): Promise<void> => {
    await userCardsQuery({
      variables: {
        isFavorite: true,
        isToDo: true,
      },
    });
  };

  const handleToggleFavoriteFilter = (): void => {
    setIsFavoriteFilter((prevState) => !prevState);
  };

  const handleToggleToDoFilter = (): void => {
    setIsToDoFilter((prevState) => !prevState);
  };

  return (
    <ul className={styles.ul}>
      <button type="button" onClick={handleQuery}>Click Me</button>
      <li className={styles.li}>
        <Toggle
          checked={isFavoriteFilter}
          onClick={handleToggleFavoriteFilter}
          text="Favorites"
        />
      </li>
      <li className={styles.li}>
        <Toggle
          checked={isToDoFilter}
          onClick={handleToggleToDoFilter}
          text="To Do"
        />
      </li>
    </ul>
  );
};

export default DashboardFilterContent;
