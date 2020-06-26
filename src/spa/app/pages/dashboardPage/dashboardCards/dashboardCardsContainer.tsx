import * as React from 'react';
import { UserCard } from 'schema/card';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import { SET_CARDS } from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCard[];
}

const DashboardCardsContainer: React.FC<Props> = ({
  userCards,
}) => {
  const { dispatch } = useDashboardCardsContext();

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

  return <DashboardCardsComponent />;
};

export default DashboardCardsContainer;
