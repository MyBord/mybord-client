import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER_CARD, TOGGLE_TO_DO_USER_CARD, TOGGLE_FAVORITE_USER_CARD, UserCard } from 'schema/card';
import CardMenuButtonContentComponent from './cardMenuButtonContentComponent';

interface Props {
  userCard: UserCard;
}

const CardMenuButtonContentContainer: React.FC<Props> = ({ userCard }) => {
  const [deleteUserCard] = useMutation(DELETE_USER_CARD);
  const [toggleToDoUserCard] = useMutation(TOGGLE_TO_DO_USER_CARD);
  const [isToDo, setIsToDo] = React.useState<boolean>(userCard.isToDo);
  const [showPopConfirm, setShowPopConfirm] = React.useState<boolean>(false);
  const deleteButtonRef = React.useRef<HTMLDivElement>(null);

  const handleDelete = async (): Promise<void> => {
    await deleteUserCard({
      variables: { id: userCard.id },
    });
  };

  const toggleToDo = async (): Promise<void> => {
    await toggleToDoUserCard({
      variables: { id: userCard.id },
    });
    setIsToDo((prevState) => !prevState);
  };

  const handleClick = async (): Promise<void> => {
    await toggleToDoUserCard({
      variables: { id: userCard.id },
    });
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Click Me</button>
      <CardMenuButtonContentComponent
        deleteButtonRef={deleteButtonRef}
        handleDelete={handleDelete}
        isToDo={isToDo}
        setShowPopConfirm={setShowPopConfirm}
        showPopConfirm={showPopConfirm}
        toggleToDo={toggleToDo}
      />
    </>
  );
};

export default CardMenuButtonContentContainer;
