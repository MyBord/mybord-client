import { UserCard } from 'schema/card';

// ----- CONSTANTS ----- //

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const SET_CARDS = 'SET_CARDS';
export const TOGGLE_IS_FAVORITE = 'TOGGLE_IS_FAVORITE';
export const TOGGLE_IS_TO_DO = 'TOGGLE_IS_TO_DO';

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

interface ToggleIsFavorite {
  type: typeof TOGGLE_IS_FAVORITE;
}

interface ToggleIsToDo {
  type: typeof TOGGLE_IS_TO_DO;
}

export type DashboardCardsDispatchTypes = AddCard
| DeleteCard
| SetCards
| ToggleIsFavorite
| ToggleIsToDo;
