import * as React from 'react';
import {
  UserCard,
} from 'schema/card';
import { SET_CARDS } from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCard[];
}

const DashboardCardsContainer: React.FC<Props> = ({ userCards }) => {
  const { dispatch, state } = useDashboardCardsContext();

  React.useEffect(() => {
    dispatch({ type: SET_CARDS, cards: userCards });
  }, [dispatch, userCards]);

  console.log('999');
  console.log(state);

  return <DashboardCardsComponent userCards={userCards} />;
};

export default DashboardCardsContainer;
// export default React.memo(DashboardCardsContainer, (prevProps, nextProps) => {
//   console.log('22222222');
//   console.log(prevProps);
//   console.log(nextProps);
//   console.log('22222222');
//   return false;
//   // return true;
// });
