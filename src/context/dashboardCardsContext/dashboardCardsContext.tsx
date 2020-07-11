import * as React from 'react';
import { DashboardCardsDispatchTypes } from './dashboardCardsReducerTypes';
import { DashboardCardsState } from './dashboardCardsState';
import { dashboardCardsReducer, initialDashboardCardsState } from './dashboardCardsReducer';

export interface DashboardCardsContextState {
  dispatch: (value: DashboardCardsDispatchTypes) => void;
  state: DashboardCardsState;
}

const initialDashboardCardsContextState: DashboardCardsContextState = {
  dispatch: () => {},
  state: initialDashboardCardsState,
};

const DashboardCardsContext = React.createContext<DashboardCardsContextState>(
  initialDashboardCardsContextState,
);

export const DashboardCardsContextProvider: React.FC = (props: object) => {
  const [state, dispatch] = React.useReducer(
    dashboardCardsReducer,
    initialDashboardCardsState,
  );

  return (
    <DashboardCardsContext.Provider
      value={{
        dispatch,
        state,
      }}
      {...props}
    />
  );
};

export const useDashboardCardsContext = (): DashboardCardsContextState => (
  React.useContext(DashboardCardsContext)
);
