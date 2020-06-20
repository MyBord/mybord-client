import * as React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
  UserCard,
  UserCardsQueryResponse,
} from 'schema/card';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCardsQueryResponse['userCards'];
}

const DashboardCardsContainer: React.FC<Props> = ({ userCards }) => {
  const userCardSubscription = useSubscription(USER_CARD_SUBSCRIPTION);
  const deletedUserCardSubscription = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);
  const finalUserCards = [...userCards];
  const userCardsIds = finalUserCards.map((userCard: UserCard) => userCard.id);

  // if (
  //   !deletedUserCardSubscription.loading
  //   && userCardsIds.includes(deletedUserCardSubscription.data.deletedUserCard.id)
  // ) {
  //   const index = userCardsIds.indexOf(deletedUserCardSubscription.data.deletedUserCard.id);
  //   userCards.splice(index, 1);
  //   // userCardsIds.splice(index, 1);
  // }

  if (
    !userCardSubscription.loading
    && !userCardsIds.includes(userCardSubscription.data.userCard.id)
  ) {
    finalUserCards.push(userCardSubscription.data.userCard);
    // userCardsIds.push(userCardSubscription.data.userCard.id);
  }

  return <DashboardCardsComponent userCards={finalUserCards} />;
};

export default DashboardCardsContainer;
