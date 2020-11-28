// Creating this interface in a separate file to avoid a dependency cycle between
// `userDashboardReducer.ts` and `userDashboardReducerUtil.ts`

import { CardCategory, UserCardData } from 'schema/card';

export interface UserDashboardState {
  allIds: string[];
  byId: { [key in string]: UserCardData; };
  filters: {
    categories: CardCategory[];
    // this tells us if filters have been applied, which is useful in knowing what ui to present
    // in case an empty result set needs to be shown
    hasFilters: boolean;
    isFavorite: boolean;
    isToDo: boolean;
    showFilters: boolean;
  };
  // indicates if the reducer has been populated with the necessary data (we don't want to
  // evaluate allIds.length because we could possibly hydrate this reducer with empty data).
  isHydrated: boolean;
}
