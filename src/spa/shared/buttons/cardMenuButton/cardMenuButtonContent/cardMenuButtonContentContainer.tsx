import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER_CARD_MUTATION, TOGGLE_TO_DO_USER_CARD_MUTATION, UserCard } from 'schema/card';
import CardMenuButtonContentComponent from './cardMenuButtonContentComponent';

interface Props {
  userCard: UserCard;
}

const CardMenuButtonContentContainer: React.FC<Props> = ({ userCard }) => {
  const [deleteUserCard] = useMutation(DELETE_USER_CARD_MUTATION);
  const [toggleToDoUserCard] = useMutation(TOGGLE_TO_DO_USER_CARD_MUTATION);
  const [isToDo, setIsToDo] = React.useState<boolean>(userCard.isToDo);

  const handleDelete = React.useCallback(async () => {
    await deleteUserCard({
      variables: { cardId: userCard.id },
    });
  }, [deleteUserCard, userCard.id]);

  const toggleToDo = async (): Promise<void> => {
    setIsToDo((prevState) => !prevState);
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
