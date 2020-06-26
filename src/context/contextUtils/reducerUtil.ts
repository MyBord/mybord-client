import {
  cloneDeep,
  omit,
  pull,
} from 'lodash';
import { AllIdsCards, ByIdCards } from 'types/reducerTypes';
import { UserCard } from 'schema/card';

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
  getAllIds,
  getById,
  removeAllId,
  removeById,
};
