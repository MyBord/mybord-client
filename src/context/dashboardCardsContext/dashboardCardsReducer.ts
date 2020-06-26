import {
  AllIds,
  ById,
  DashboardCardsDispatchTypes,
  DELETE_CARD,
  SET_CARDS,
} from './dashboardCardsReducerTypes';
import reducerUtil from './dashboardCardsReducerUtil';

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
    case DELETE_CARD: {
      console.log('rrrrrr');
      console.log(action.id);
      console.log('rrrrrr');
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
