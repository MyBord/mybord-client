import { UserCard } from 'schema/card';

// ----- CONSTANTS ----- //

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const SET_CARDS = 'SET_CARDS';

// ----- INTERFACES ----- //

interface AddCard {
  type: typeof ADD_CARD;
  card: UserCard;
}

interface DeleteCard {
  type: typeof DELETE_CARD;
  id: UserCard['id'];
}

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

export type DashboardCardsDispatchTypes = AddCard
| DeleteCard
| SetCards;
