import {
  assign,
  cloneDeep,
  omit,
  pull,
} from 'lodash';
import { DashboardCardsState } from 'context/dashboardCardsContext/dashboardCardsState';
import { UserCard } from 'schema/card';
import { capitalize } from 'utils/language';

type AllIdsCards = DashboardCardsState['allIds'];
type ByIdCards = DashboardCardsState['byId'];

const addAllId = (allIds: AllIdsCards, id: UserCard['id']): AllIdsCards => {
  const clonedAllIds = cloneDeep(allIds);
  return clonedAllIds.concat(id);
};

const addById = (byId: ByIdCards, card: UserCard): ByIdCards => {
  const clonedById = cloneDeep(byId);
  const newCard = { [card.id]: card };
  return assign(clonedById, newCard);
};

const getAllIds = (userCards: UserCard[]): AllIdsCards => {
  const clonedUserCards = cloneDeep(userCards);
  return clonedUserCards.map((userCard: UserCard) => userCard.id);
};

const getById = (userCards: UserCard[]): ByIdCards => {
  const clonedUserCards = cloneDeep(userCards);
  const byId: ByIdCards = {};
  clonedUserCards.forEach((userCard: UserCard) => { byId[userCard.id] = userCard; });
  return byId;
};

const removeAllId = (allIds: AllIdsCards, id: UserCard['id']): AllIdsCards => {
  const clonedAllIds = cloneDeep(allIds);
  return pull(clonedAllIds, id);
};

const removeById = (byId: ByIdCards, id: UserCard['id']): ByIdCards => {
  const clonedById = cloneDeep(byId);
  return omit(clonedById, id);
};

const toggleCardFilter = (
  filter: 'favorite' | 'toDo',
  id: UserCard['id'],
  state: DashboardCardsState,
): DashboardCardsState => {
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
