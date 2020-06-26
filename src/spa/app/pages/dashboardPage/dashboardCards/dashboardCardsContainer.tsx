import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  UserCard,
} from 'schema/card';
import {
  DELETE_CARD,
  SET_CARDS,
} from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCard[];
}

const DashboardCardsContainer: React.FC<Props> = ({
  userCards,
}) => {
  const {
    data: deleteData,
    loading: deleteLoading,
  } = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);
  const { dispatch } = useDashboardCardsContext();

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

  React.useEffect(() => {
    if (!deleteLoading) {
      dispatch({ type: DELETE_CARD, id: deleteData.deletedUserCard.id });
    }
  }, [dispatch, deleteData, deleteLoading]);

  return <DashboardCardsComponent />;
};

export default DashboardCardsContainer;
