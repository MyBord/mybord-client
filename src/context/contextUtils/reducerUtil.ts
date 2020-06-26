import {
  cloneDeep,
  omit,
  pull,
} from 'lodash';
import { UserCard } from 'schema/card';
import {
  AllIds,
  ById,
} from './dashboardCardsReducerTypes';

const getAllIds = (userCards: UserCard[]): AllIds => {
  const clonedUserCards = cloneDeep(userCards);
  return clonedUserCards.map((userCard: UserCard) => userCard.id)
};

const getById = (userCards: UserCard[]): ById => {
  const clonedUserCards = cloneDeep(userCards);
  const byId: ById = {};
  clonedUserCards.forEach((userCard: UserCard) => { byId[userCard.id] = userCard; });
  return byId;
};

const removeAllId = (allIds: AllIds, id: UserCard['id']): AllIds => {
  const clonedAllIds = cloneDeep(allIds);
  return pull(clonedAllIds, id);
};

const removeById = (byId: ById, id: UserCard['id']): ById => {
  const clonedById = cloneDeep(byId);
  return omit(clonedById, id);
};

export default {
  getAllIds,
  getById,
  removeAllId,
  removeById,
};
