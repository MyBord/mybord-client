import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  FILTERED_USER_CARDS_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
  USER_CARDS_QUERY,
  UserCard,
} from 'schema/card';
import {
  ADD_CARD,
  DELETE_CARD,
  RECEIVE_FILTERED_CARDS,
  SET_CARDS,
} from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import DashboardPageComponent from './dashboardPageComponent';

interface Props {
  data: {
    userCards: UserCard[];
  };
}

const DashboardPageContainer: React.FC<Props> = ({ data }) => {
  const { state, dispatch } = useDashboardCardsContext();
  const { setHydrationStatus } = useHydrationContext();

  // ----- ADDING CARDS ----- //
  // first adding cards to state that were initially retrieved when our page was loaded

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: data.userCards });
  }, [dispatch, data.userCards]);

  // ----- ADDING A CARD ----- //
  // subscribing to when a card gets added

  const { data: cardData, loading: cardLoading } = useSubscription(USER_CARD_SUBSCRIPTION);

  React.useEffect(() => {
    if (!cardLoading) {
      dispatch({ type: ADD_CARD, card: cardData.userCard });
    }
  }, [cardData, cardLoading, dispatch]);

  // ----- DELETING A CARD ----- //
  // subscribing to when a card gets deleted

  const {
    data: deleteData,
    loading: deleteLoading,
  } = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);

  React.useEffect(() => {
    if (!deleteLoading) {
      dispatch({ type: DELETE_CARD, id: deleteData.deletedUserCard.id });
    }
  }, [dispatch, deleteData, deleteLoading]);

  // ----- SUBSCRIBING TO FILTERS ----- //
  // subscribing to when cards get filtered

  const {
    data: filteredUserCardsData,
    loading: filteredUserCardsLoading,
  } = useSubscription(FILTERED_USER_CARDS_SUBSCRIPTION);

  React.useEffect(() => {
    if (!filteredUserCardsLoading) {
      dispatch({
        type: RECEIVE_FILTERED_CARDS,
        cards: filteredUserCardsData.filteredUserCards.userCards,
        filters: filteredUserCardsData.filteredUserCards.filters,
      });
    }
  }, [filteredUserCardsData, filteredUserCardsLoading, dispatch]);

  // ----- TURNS OFF LOADING ANIMATION ----- //
  // this turns off the loading animation / spinner for the page once our reducer has been
  // properly hydrated

  React.useEffect(() => {
    if (state.isHydrated) {
      setHydrationStatus(true);
    }
  }, [setHydrationStatus, state.isHydrated]);

  // ----- RETURNING THE CHILD COMPONENT ----- //

  if (state.isHydrated) {
    return <DashboardPageComponent />;
  }

  return null;
};

export default pageWrapper({
  Component: DashboardPageContainer,
  gqlString: USER_CARDS_QUERY,
  setHydration: false,
});
