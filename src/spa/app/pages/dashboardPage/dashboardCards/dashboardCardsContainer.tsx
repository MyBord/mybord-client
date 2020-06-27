import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
  USER_CARDS_SUBSCRIPTION,
  UserCard,
} from 'schema/card';
import {
  ADD_CARD,
  DELETE_CARD,
  SET_CARDS,
} from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCard[];
}

const DashboardCardsContainer: React.FC<Props> = ({ userCards }) => {
  const { dispatch } = useDashboardCardsContext();

  // ----- ADDING CARDS ----- //
  // first adding cards to state that were initially retrieved when our page was loaded

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

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

  const { data: cardsData, loading: cardsLoading } = useSubscription(USER_CARDS_SUBSCRIPTION);

  React.useEffect(() => {
    if (!cardsLoading) {
      dispatch({ type: SET_CARDS, cards: cardsData.userCards });
    }
  }, [cardsData, cardsLoading, dispatch]);

  // ----- RETURNING THE CHILD COMPONENT ----- //

  return <DashboardCardsComponent />;
};

export default DashboardCardsContainer;
