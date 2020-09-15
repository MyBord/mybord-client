import * as React from 'react';
import { AddCardModalProps } from 'types/modalTypes';
import { UserCard } from 'schema/card';
import { useAddCardModalContext } from 'context/addCardModalContext/addCardModalContext';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormComponent from './addCardModalComponent';

const AddCardModalContainer: React.FC = () => {
  const [formData, setFormData] = React.useState<AddCardModalProps['formData']>(null);
  const [userCard, setUserCard] = React.useState<UserCard>(null);
  const { title: updatedTitle } = useAddCardModalContext();
  const { modalData, modalId } = useModalContext();

  React.useEffect(() => {
    if (modalId === 'add-card-modal' && modalData && modalData.cardData) {
      const {
        cardData,
        category,
        title,
        url,
      } = modalData;

      setUserCard({
        id: 'add-card-modal',
        category: 'Video',
        isFavorite: false,
        isToDo: false,
        title: cardData.youtubeCardData.videoTitle,
        type: 'Youtube',
        cardData,
      });

      setFormData({
        cardData,
        category,
        title,
        url,
      });
    }
  }, [modalData]);

  if (formData && userCard) {
    if (updatedTitle !== null) {
      return (
        <AddCardModalFormComponent
          formData={formData}
          userCard={{ ...userCard, title: updatedTitle }}
        />
      );
    }

    return (
      <AddCardModalFormComponent
        formData={formData}
        userCard={userCard}
      />
    );
  }

  return null;
};

export default AddCardModalContainer;
