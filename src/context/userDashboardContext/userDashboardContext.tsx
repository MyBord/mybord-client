import * as React from 'react';
import { UserDashboardDispatchTypes } from './userDashboardReducerTypes';
import { UserDashboardState } from './userDashboardState';
import { userDashboardReducer, initialUserDashboardState } from './userDashboardReducer';

export interface UserDashboardContextState {
  dispatch: (value: UserDashboardDispatchTypes) => void;
  state: UserDashboardState;
}

const initialUserDashboardContextState: UserDashboardContextState = {
  dispatch: () => {},
  state: initialUserDashboardState,
};

const UserDashboardContext = React.createContext<UserDashboardContextState>(
  initialUserDashboardContextState,
);

export const UserDashboardContextProvider: React.FC = (props: object) => {
  const [state, dispatch] = React.useReducer(
    userDashboardReducer,
    initialUserDashboardState,
  );

  return (
    <UserDashboardContext.Provider
      value={{
        dispatch,
        state,
      }}
      {...props}
    />
  );
};

export const useUserDashboardContext = (): UserDashboardContextState => (
  React.useContext(UserDashboardContext)
);
