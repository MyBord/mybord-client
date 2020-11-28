import { CardCategory, UserCardData } from 'schema/card';

// ----- CONSTANTS ----- //

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const RECEIVE_FILTERED_CARDS = 'RECEIVE_FILTERED_CARDS';
export const SET_CARDS = 'SET_CARDS';
export const SET_CARD_CATEGORIES_FILTER = 'SET_CARD_CATEGORIES_FILTER';
export const TOGGLE_CARD_FILTER = 'TOGGLE_CARD_FILTER';
export const TOGGLE_SHOW_FILTERS = 'TOGGLE_SHOW_FILTERS';

// ----- INTERFACES ----- //

interface AddCard {
  type: typeof ADD_CARD;
  card: UserCardData;
}

interface DeleteCard {
  type: typeof DELETE_CARD;
  id: UserCardData['id'];
}

interface ReceiveFilteredCards {
  type: typeof RECEIVE_FILTERED_CARDS;
  cards: UserCardData[];
  filters: {
    categories: CardCategory[];
    isFavorite?: boolean;
    isToDo?: boolean;
  };
}

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCardData[];
}

interface SetCardCategoriesFilter {
  type: typeof SET_CARD_CATEGORIES_FILTER;
  categories: CardCategory[];
}

interface ToggleCardFilter {
  type: typeof TOGGLE_CARD_FILTER;
  filter: 'favorite' | 'toDo';
  id: UserCardData['id'];
}

interface ToggleShowFilters {
  type: typeof TOGGLE_SHOW_FILTERS;
}

export type UserDashboardDispatchTypes = AddCard
| DeleteCard
| ReceiveFilteredCards
| SetCards
| SetCardCategoriesFilter
| ToggleCardFilter
| ToggleShowFilters;
