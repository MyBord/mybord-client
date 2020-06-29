import * as React from 'react';

interface DashboardFilterState {
  isFavorite: boolean;
  isToDo: boolean;
  setIsFavorite: (isFavorite: boolean | ((prevState: boolean) => boolean)) => void;
  setIsToDo: (isToDo: boolean | ((prevState: boolean) => boolean)) => void;
}

const initialDashboardFilterState: DashboardFilterState = {
  isFavorite: false,
  isToDo: false,
  setIsFavorite: () => {},
  setIsToDo: () => {},
};

const DashboardFilterContext = React.createContext<DashboardFilterState>(
  initialDashboardFilterState,
);

export const DashboardFilterContextProvider = (props: object): React.ReactElement => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  const [isToDo, setIsToDo] = React.useState<boolean>(false);

  return (
    <DashboardFilterContext.Provider
      value={{
        isFavorite,
        isToDo,
        setIsFavorite,
        setIsToDo,
      }}
      {...props}
    />
  );
};

export const useDashboardFilterContext = (): DashboardFilterState => (
  React.useContext(DashboardFilterContext)
);
