import { UserCard } from 'schema/card';

// ----- CONSTANTS ----- //

export const SET_CARDS = 'SET_CARDS';

// ----- INTERFACES ----- //

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

export type DashboardCardsDispatchTypes = SetCards;
