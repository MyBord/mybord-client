import reducerUtil from 'context/contextUtils/reducerUtil';
import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import {
  DashboardCardsDispatchTypes,
  DELETE_CARD,
  SET_CARDS,
} from './dashboardCardsReducerTypes';

export interface DashboardCardsState {
  allIds: AllIdsCards;
  byId: ByIdCards;
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
    case DELETE_CARD: {
      return {
        ...state,
        allIds: reducerUtil.removeAllId(state.allIds, action.id),
        byId: reducerUtil.removeById(state.byId, action.id),
      };
    }
    case SET_CARDS:
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
      };
    default:
      return state;
  }
};
