import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import reducerUtil from './dashboardCardsReducerUtil';
import {
  ADD_CARD,
  DashboardCardsDispatchTypes,
  DELETE_CARD,
  RECEIVE_FILTERED_CARDS,
  SET_CARDS,
} from './dashboardCardsReducerTypes';

export interface DashboardCardsState {
  allIds: AllIdsCards;
  byId: ByIdCards;
  filters: {
    // this tells us if filters have been applied, which is useful in knowing what ui to present
    // in case an empty result set needs to be shown
    hasFilters: boolean;
    isFavorite: boolean;
    isToDo: boolean;
  };
  // indicates if the reducer has been populated with the necessary data (we don't want to
  // evaluate allIds.length because we could possibly hydrate this reducer with empty data).
  isHydrated: boolean;
}

export const initialDashboardCardsState: DashboardCardsState = {
  allIds: [],
  byId: {},
  filters: {
    hasFilters: false,
    isFavorite: false,
    isToDo: false,
  },
  isHydrated: false,
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
    case RECEIVE_FILTERED_CARDS: {
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
        filters: {
          hasFilters: action.filters.isFavorite || action.filters.isToDo,
          isFavorite: !!action.filters.isFavorite,
          isToDo: !!action.filters.isToDo,
        },
      };
    }
    case SET_CARDS:
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
      };
    default:
      return state;
  }
};
