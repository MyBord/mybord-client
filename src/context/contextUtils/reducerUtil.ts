import {
  assign,
  cloneDeep,
  omit,
  pull,
} from 'lodash';
import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import { UserCard } from 'schema/card';

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

export default {
  addAllId,
  addById,
  getAllIds,
  getById,
  removeAllId,
  removeById,
};
