import reducerUtil from 'context/contextUtils/reducerUtil';
import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import {
  ADD_CARD,
  DELETE_CARD,
  DashboardCardsDispatchTypes,
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
    case ADD_CARD:
      return {
        ...state,
        allIds: reducerUtil.addAllId(state.allIds, action.card.id),
        byId: reducerUtil.addById(state.byId, action.card),
      };
    case DELETE_CARD:
      return {
        ...state,
        allIds: reducerUtil.removeAllId(state.allIds, action.id),
        byId: reducerUtil.removeById(state.byId, action.id),
      };
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
