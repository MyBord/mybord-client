
import { cloneDeep } from 'lodash';
import { UserCard } from 'schema/card';
import {
  AllIds,
  ById,
} from './dashboardCardsReducerTypes';

// todo: spread

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

export {
  getAllIds,
  getById,
};
