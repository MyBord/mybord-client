import reducerUtil from 'context/contextUtils/reducerUtil';
import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import {
  ADD_CARD,
  DashboardCardsDispatchTypes,
  DELETE_CARD,
  SET_CARDS,
  TOGGLE_IS_FAVORITE,
  TOGGLE_IS_TO_DO,
} from './dashboardCardsReducerTypes';

export interface DashboardCardsState {
  allIds: AllIdsCards;
  byId: ByIdCards;
  filters: {
    // this tells us if filters have been applied, which is useful in knowing what ui to present
    // in case an empty result set needs to be shown
    filtersApplied: boolean;
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
    filtersApplied: false,
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
    case SET_CARDS:
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
      };
    case TOGGLE_IS_FAVORITE: {
      // *1: we are applying said filter
      // *2: we are turning off said filter but another filter is still turned on
      let filtersApplied: boolean;
      if (!state.filters.isFavorite) { // *1
        filtersApplied = true;
      } else if (state.filters.isToDo) { // *2
        filtersApplied = true;
      } else {
        filtersApplied = false;
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          filtersApplied,
          isFavorite: !state.filters.isFavorite,
        },
      };
    }
    case TOGGLE_IS_TO_DO: {
      let filtersApplied: boolean;
      if (!state.filters.isToDo) { // *1
        filtersApplied = true;
      } else if (state.filters.isFavorite) { // *2
        filtersApplied = true;
      } else {
        filtersApplied = false;
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          filtersApplied,
          isToDo: !state.filters.isToDo,
        },
      };
    }
    default:
      return state;
  }
};
