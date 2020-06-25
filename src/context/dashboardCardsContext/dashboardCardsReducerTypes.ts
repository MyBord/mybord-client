import { UserCard } from 'schema/card';

// ----- TYPES ----- //

export type AllIds = string[];

export type ById = { [key in string]: UserCard; };

// ----- CONSTANTS ----- //

export const SET_CARDS = 'SET_CARDS';

// ----- INTERFACES ----- //

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

export type DashboardCardsDispatchTypes = SetCards;
