import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import { AddCardModalProps } from 'types/modalTypes';
import { CREATE_YOUTUBE_CARD_MUTATION } from 'schema/card';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormComponent from './addCardModalFormComponent';

const AddCardModalFormContainer: React.FC<AddCardModalProps> = ({ cardData }) => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD_MUTATION);
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  const handleSubmit = async (): Promise<void> => {
    setIsWaiting(true);
    await createYoutubeCard({
      variables: {
        videoUrl: cardData && cardData.url,
      },
    });
    setIsWaiting(false);
    setModalId(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AddCardModalFormComponent cardData={cardData} isWaiting={isWaiting} />
    </Form>
  );
};

export default AddCardModalFormContainer;
