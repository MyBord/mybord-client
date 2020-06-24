import * as React from 'react';
import Toggle from 'inputs/toggle/toggle';
import * as styles from './dashboardFilterContent.module.less';

const DashboardFilterContent: React.FC = () => {
  const [isFavoriteFilter, setIsFavoriteFilter] = React.useState<boolean>(false);
  const [isToDoFilter, setIsToDoFilter] = React.useState<boolean>(false);

  const handleToggleFavoriteFilter = (): void => {
    setIsFavoriteFilter((prevState) => !prevState);
  };

  const handleToggleToDoFilter = (): void => {
    setIsToDoFilter((prevState) => !prevState);
  };

  return (
    <ul className={styles.ul}>
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
