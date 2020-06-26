import * as React from 'react';
import { UserCard } from 'schema/card';
import {
  DashboardCardsContextState,
  useDashboardCardsContext,
} from 'context/dashboardCardsContext/dashboardCardsContext';
import { SET_CARDS } from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  dispatch: DashboardCardsContextState['dispatch'];
  state: DashboardCardsContextState['state'];
  userCards: UserCard[];
}

// ToDo: do I need state?

const DashboardCardsContainer: React.FC<Props> = ({
  dispatch,
  state,
  userCards,
}) => {
  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

  return <DashboardCardsComponent />;
};

export default DashboardCardsContainer;
