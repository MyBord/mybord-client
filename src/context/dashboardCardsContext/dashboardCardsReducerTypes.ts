import { UserCard } from 'schema/card';

// ----- TYPES ----- //

export type AllIds = string[];

export type ById = { [key in string]: UserCard; };

// ----- CONSTANTS ----- //

export const DELETE_CARD = 'DELETE_CARD';
export const SET_CARDS = 'SET_CARDS';

// ----- INTERFACES ----- //

interface DeleteCard {
  type: typeof DELETE_CARD;
  id: UserCard['id'];
}

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

export type DashboardCardsDispatchTypes = DeleteCard
| SetCards;
