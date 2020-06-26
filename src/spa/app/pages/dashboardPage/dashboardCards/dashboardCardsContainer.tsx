import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
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

  // ----- TODO: ADD NOTES ----- //

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

  // ----- TODO: ADD NOTES ----- //

  const { data: cardData, loading: cardLoading } = useSubscription(USER_CARD_SUBSCRIPTION);

  React.useEffect(() => {
    if (!cardLoading) {
      dispatch({ type: ADD_CARD, card: cardData.userCard });
    }
  }, [cardData, cardLoading, dispatch]);

  // ----- TODO: ADD NOTES ----- //

  const {
    data: deleteData,
    loading: deleteLoading,
  } = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);

  React.useEffect(() => {
    if (!deleteLoading) {
      dispatch({ type: DELETE_CARD, id: deleteData.deletedUserCard.id });
    }
  }, [dispatch, deleteData, deleteLoading]);

  // ----- TODO: ADD NOTES ----- //

  return <DashboardCardsComponent />;
};

export default DashboardCardsContainer;
