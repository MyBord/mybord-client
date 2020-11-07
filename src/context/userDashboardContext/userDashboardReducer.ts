import {UserDashboardState} from './userDashboardState';
import reducerUtil from './userDashboardReducerUtil';
import {
  ADD_CARD,
  DELETE_CARD,
  RECEIVE_FILTERED_CARDS,
  SET_CARD_CATEGORIES_FILTER,
  SET_CARDS,
  TOGGLE_CARD_FILTER,
  TOGGLE_SHOW_FILTERS,
  UserDashboardDispatchTypes,
} from './userDashboardReducerTypes';

export const initialUserDashboardState: UserDashboardState = {
  allIds: [],
  byId: {},
  filters: {
    categories: [],
    hasFilters: false,
    isFavorite: false,
    isToDo: false,
    showFilters: false,
  },
  isHydrated: false,
};

export const userDashboardReducer = (
  state: UserDashboardState,
  action: UserDashboardDispatchTypes,
): UserDashboardState => {
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
      const { categories, isFavorite, isToDo } = action.filters;
      const hasFilters = (categories && categories.length > 0) || isFavorite || isToDo;
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
        filters: {
          categories,
          hasFilters,
          isFavorite: !!isFavorite,
          isToDo: !!isToDo,
          showFilters: state.filters.showFilters,
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
    case SET_CARD_CATEGORIES_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: [...action.categories],
        },
      };
    case TOGGLE_CARD_FILTER:
      return reducerUtil.toggleCardFilter(action.filter, action.id, state);
    case TOGGLE_SHOW_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          showFilters: !state.filters.showFilters,
        },
      };
    default:
      return state;
  }
};
