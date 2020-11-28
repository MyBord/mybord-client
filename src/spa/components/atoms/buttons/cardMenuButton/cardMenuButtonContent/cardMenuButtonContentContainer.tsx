// *1: Note: The entire card component `card.tsx` is memoized and will re render only when its
// props change *except* for `isFavorite` `isToDo`. Thus, this component would normally not get
// when `isToDo` is toggled, so instead, we rehook into the context at this component level.

import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  DELETE_USER_CARD_MUTATION,
  TOGGLE_TO_DO_USER_CARD_MUTATION,
  UserCardData,
} from 'schema/card';
import { TOGGLE_CARD_FILTER } from 'context/userDashboardContext/userDashboardReducerTypes';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import CardMenuButtonContentComponent from './cardMenuButtonContentComponent';

export interface Props {
  cardId: UserCardData['id'];
}

const CardMenuButtonContentContainer: React.FC<Props> = ({ cardId }) => {
  const { state, dispatch } = useUserDashboardContext();

  const userCard = state.byId[cardId]; // *1

  const [deleteUserCard] = useMutation(DELETE_USER_CARD_MUTATION);
  const [isToDo, setIsToDo] = React.useState<boolean>(userCard.isToDo);
  const [toggleToDoUserCard] = useMutation(TOGGLE_TO_DO_USER_CARD_MUTATION);

  const handleDelete = React.useCallback(async () => {
    await deleteUserCard({
      variables: { cardId: userCard.id },
    });
  }, [deleteUserCard, userCard.id]);

  const toggleToDo = async (): Promise<void> => {
    setIsToDo((prevState) => !prevState);
    dispatch({ type: TOGGLE_CARD_FILTER, filter: 'toDo', id: userCard.id });
    try {
      await toggleToDoUserCard({
        variables: { cardId: userCard.id },
      });
    } catch (error) {
      setIsToDo((prevState) => !prevState);
      throw new Error(error);
    }
  };

  return (
    <CardMenuButtonContentComponent
      handleDelete={handleDelete}
      isToDo={isToDo}
      toggleToDo={toggleToDo}
    />
  );
};

export default CardMenuButtonContentContainer;
