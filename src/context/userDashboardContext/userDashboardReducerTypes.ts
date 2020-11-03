import { CardCategory, UserCard } from 'schema/card';

// ----- CONSTANTS ----- //

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const RECEIVE_FILTERED_CARDS = 'RECEIVE_FILTERED_CARDS';
export const SET_CARDS = 'SET_CARDS';
export const SET_CARD_CATEGORIES_FILTER = 'SET_CARD_CATEGORIES_FILTER';
export const TOGGLE_CARD_FILTER = 'TOGGLE_CARD_FILTER';

// ----- INTERFACES ----- //

interface AddCard {
  type: typeof ADD_CARD;
  card: UserCard;
}

interface DeleteCard {
  type: typeof DELETE_CARD;
  id: UserCard['id'];
}

interface ReceiveFilteredCards {
  type: typeof RECEIVE_FILTERED_CARDS;
  cards: UserCard[];
  filters: {
    categories: CardCategory[];
    isFavorite?: boolean;
    isToDo?: boolean;
  };
}

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

interface SetCardCategoriesFilter {
  type: typeof SET_CARD_CATEGORIES_FILTER;
  categories: CardCategory[];
}

interface ToggleCardFilter {
  type: typeof TOGGLE_CARD_FILTER;
  filter: 'favorite' | 'toDo';
  id: UserCard['id'];
}

export type UserDashboardDispatchTypes = AddCard
| DeleteCard
| ReceiveFilteredCards
| SetCards
| SetCardCategoriesFilter
| ToggleCardFilter;
