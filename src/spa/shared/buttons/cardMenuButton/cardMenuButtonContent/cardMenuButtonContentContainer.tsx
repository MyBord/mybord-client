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
  const [showPopConfirm, setShowPopConfirm] = React.useState<boolean>(false);
  const deleteButtonRef = React.useRef<HTMLDivElement>(null);

  const handleDelete = async (): Promise<void> => {
    await deleteUserCard({
      variables: { cardId: userCard.id },
    });
  };

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
      deleteButtonRef={deleteButtonRef}
      handleDelete={handleDelete}
      isToDo={isToDo}
      setShowPopConfirm={setShowPopConfirm}
      showPopConfirm={showPopConfirm}
      toggleToDo={toggleToDo}
    />
  );
};

export default CardMenuButtonContentContainer;
