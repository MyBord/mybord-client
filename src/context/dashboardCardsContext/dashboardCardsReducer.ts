import {
  AllIds,
  ById,
  DashboardCardsDispatchTypes,
  SET_CARDS,
} from './dashboardCardsReducerTypes';
import { getAllIds, getById } from './dashboardCardsReducerUtil';

export interface DashboardCardsState {
  allIds: AllIds;
  byId: ById;
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
        allIds: getAllIds(action.cards),
        byId: getById(action.cards),
      };
    default:
      return state;
  }
};
