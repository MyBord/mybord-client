import { UserCard } from 'schema/card';
import {
  DashboardCardsDispatchTypes,
  SET_CARDS,
} from './dashboardCardsReducerTypes';

export interface DashboardCardsState {
  allIds: number[];
  byId: {
    [key in number]: UserCard;
  };
}

export const initialDashboardCardsState: DashboardCardsState = {
  allIds: [],
  byId: {},
};

export const dashboardCardsReducer = (
  state: DashboardCardsState,
  action: DashboardCardsDispatchTypes,
): DashboardCardsState => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
