import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Toggle from 'inputs/toggle/toggle';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import * as styles from './dashboardFilterContent.module.less';

const DashboardFilterContent: React.FC = () => {
  const [isFavoriteFilter, setIsFavoriteFilter] = React.useState<boolean>(false);
  const [isToDoFilter, setIsToDoFilter] = React.useState<boolean>(false);
  const [userCardsQuery] = useLazyQuery(USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' });

  const handleToggleFavoriteFilter = async (): Promise<void> => {
    setIsFavoriteFilter((prevState) => !prevState);
    await userCardsQuery({
      variables: {
        isFavorite: !isFavoriteFilter,
        isToDo: isToDoFilter,
      },
    });
  };

  const handleToggleToDoFilter = async (): Promise<void> => {
    setIsToDoFilter((prevState) => !prevState);
    await userCardsQuery({
      variables: {
        isFavorite: isFavoriteFilter,
        isToDo: !isToDoFilter,
      },
    });
  };

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Toggle
          checked={isFavoriteFilter}
          onClick={handleToggleFavoriteFilter}
          size="small"
          text="Favorites"
        />
      </li>
      <li className={styles.li}>
        <Toggle
          checked={isToDoFilter}
          onClick={handleToggleToDoFilter}
          size="small"
          text="To Do"
        />
      </li>
    </ul>
  );
};

export default DashboardFilterContent;
