import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER_CARD } from 'schema/card';
import CardMenuButtonContentComponent from './cardMenuButtonContentComponent';

interface Props {
  cardId: string;
}

const CardMenuButtonContentContainer: React.FC<Props> = ({ cardId }) => {
  const [isToDo, setIsToDo] = React.useState<boolean>(true);
  const [deleteYoutubeCard] = useMutation(DELETE_USER_CARD);
  const toggleToDo = (): void => setIsToDo((prevState) => !prevState);

  const handleDelete = async (): Promise<void> => {
    await deleteYoutubeCard({
      variables: { cardId },
    });
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
