import * as React from 'react';
import Toggle from 'inputs/toggle/toggle';

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
    <ul>
      <li>
        <Toggle
          checked={isFavoriteFilter}
          onClick={handleToggleFavoriteFilter}
          size="small"
          text="Favorites"
        />
      </li>
      <li>
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
