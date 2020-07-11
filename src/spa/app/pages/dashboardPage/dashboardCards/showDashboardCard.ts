import { DashboardCardsState } from 'context/dashboardCardsContext/dashboardCardsState';
import { UserCard } from 'schema/card';

export default (
  filters: DashboardCardsState['filters'],
  userCard: UserCard,
): boolean => {
  if (filters.hasFilters) {
    if (filters.isFavorite && filters.isToDo) {
      return userCard.isFavorite && userCard.isToDo;
    }

    if (filters.isFavorite) {
      return userCard.isFavorite;
    }

    if (filters.isToDo) {
      return userCard.isToDo;
    }

    return true;
  }

  return true;
};
