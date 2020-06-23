import * as React from 'react';
import Toggle from 'inputs/toggle/toggle';
import Typography from 'typography/typography';

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
    <div>
      <div>
        <Toggle
          checked={isFavoriteFilter}
          onClick={handleToggleFavoriteFilter}
          size="small"
        />
        <Typography
          onClick={handleToggleFavoriteFilter}
          size="two"
          text="Favorites"
        />
      </div>
      <div>
        <Toggle
          checked={isToDoFilter}
          onClick={handleToggleToDoFilter}
          size="small"
        />
        <Typography
          onClick={handleToggleToDoFilter}
          size="two"
          text="To Do"
        />
      </div>
    </div>
  );
};

export default DashboardFilterContent;
