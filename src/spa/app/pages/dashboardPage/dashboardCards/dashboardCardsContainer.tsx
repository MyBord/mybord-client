import * as React from 'react';
import { pull } from 'lodash';
import { useSubscription } from '@apollo/react-hooks';
import {
  DELETED_USER_CARD_SUBSCRIPTION,
  USER_CARD_SUBSCRIPTION,
  UserCard,
} from 'schema/card';
import DashboardCardsComponent from './dashboardCardsComponent';

interface Props {
  userCards: UserCard[];
}

const DashboardCardsContainer: React.FC<Props> = ({ userCards }) => {
  const { data: cardData, loading: cardLoading } = useSubscription(USER_CARD_SUBSCRIPTION);
  const {
    data: deleteData,
    loading: deleteLoading,
  } = useSubscription(DELETED_USER_CARD_SUBSCRIPTION);

  const [finalUserCards, setFinalUserCards] = React.useState<UserCard[]>([...userCards]);
  const [
    userCardsIds,
    setUserCardIds,
  ] = React.useState<string[]>(finalUserCards.map((userCard: UserCard) => userCard.id));

  // We need to track the array of `deletedCardIds` so that in the case where the user adds a
  // new card *and* deletes it within the same browser / spa session, we do not create an
  // infinite loop where we delete the card but then we detect that the card is missing in
  // `userCardsIds` and thus add it back in.
  const [deletedCardIds, setDeletedCardIds] = React.useState<string[]>([]);

  if (
    !deleteLoading
    && userCardsIds.includes(deleteData.deletedUserCard.id)
  ) {
    setFinalUserCards((prevState) => {
      prevState.splice(userCardsIds.indexOf(deleteData.deletedUserCard.id), 1);
      return prevState;
    });
    setUserCardIds((prevState) => pull(prevState, deleteData.deletedUserCard.id));
    setDeletedCardIds((prevState) => prevState.concat(deleteData.deletedUserCard.id));
  }

  if (
    !cardLoading
    && !userCardsIds.includes(cardData.userCard.id)
    && !deletedCardIds.includes(cardData.userCard.id)
  ) {
    setFinalUserCards((prevState) => prevState.concat(cardData.userCard));
    setUserCardIds((prevState) => prevState.concat(cardData.userCard.id));
  }

  return <DashboardCardsComponent userCards={finalUserCards} />;
};

export default DashboardCardsContainer;
