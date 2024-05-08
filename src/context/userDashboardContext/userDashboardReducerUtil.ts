import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import pull from 'lodash/pull';
import { UserCardData } from 'schema/card';
import { capitalize } from 'utils/language';
import { UserDashboardState } from './userDashboardState';

type AllIdsCards = UserDashboardState['allIds'];
type ByIdCards = UserDashboardState['byId'];

const addAllId = (allIds: AllIdsCards, id: UserCardData['id']): AllIdsCards => {
  const clonedAllIds = cloneDeep(allIds);
  return clonedAllIds.concat(id);
};

const addById = (byId: ByIdCards, card: UserCardData): ByIdCards => {
  const clonedById = cloneDeep(byId);
  const newCard = { [card.id]: card };
  return assign(clonedById, newCard);
};

const getAllIds = (userCards: UserCardData[]): AllIdsCards => {
  const clonedUserCards = cloneDeep(userCards);
  return clonedUserCards.map((userCard: UserCardData) => userCard.id);
};

const getById = (userCards: UserCardData[]): ByIdCards => {
  const clonedUserCards = cloneDeep(userCards);
  const byId: ByIdCards = {};
  clonedUserCards.forEach((userCard: UserCardData) => { byId[userCard.id] = userCard; });
  return byId;
};

const removeAllId = (allIds: AllIdsCards, id: UserCardData['id']): AllIdsCards => {
  const clonedAllIds = cloneDeep(allIds);
  return pull(clonedAllIds, id);
};

const removeById = (byId: ByIdCards, id: UserCardData['id']): ByIdCards => {
  const clonedById = cloneDeep(byId);
  return omit(clonedById, id);
};

const toggleCardFilter = (
  filter: 'favorite' | 'toDo',
  id: UserCardData['id'],
  state: UserDashboardState,
): UserDashboardState => {
  const clonedState = cloneDeep(state);
  // @ts-ignore
  const filterKey: 'isFavorite' | 'isToDo' = `is${capitalize(filter)}`;

  // if the data set is currently filtered to the same param in which the individual card
  // is having its filter toggled off, then remove that card from the data set.
  if (clonedState.filters[filterKey]) {
    return {
      ...clonedState,
      allIds: removeAllId(clonedState.allIds, id),
      byId: removeById(clonedState.byId, id),
    };
  }

  return {
    ...clonedState,
    allIds: [...clonedState.allIds],
    byId: {
      ...clonedState.byId,
      [id]: {
        ...clonedState.byId[id],
        [filterKey]: !clonedState.byId[id][filterKey],
      },
    },
  };
};

export default {
  addAllId,
  addById,
  getAllIds,
  getById,
  removeAllId,
  removeById,
  toggleCardFilter,
};
