import * as React from 'react';
import { AddCardModalProps } from 'types/modalTypes';
import { UserCard } from 'schema/card';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormComponent from './addCardModalComponent';

const AddCardModalContainer: React.FC = () => {
  const [formData, setFormData] = React.useState<AddCardModalProps['formData']>(null);
  const [userCard, setUserCard] = React.useState<UserCard>(null);
  const { modalData, modalId } = useModalContext();

  React.useEffect(() => {
    if (modalId === 'add-card-modal' && modalData && modalData.youtubeCardData) {
      const {
        category,
        title,
        url,
        youtubeCardData,
      } = modalData;

      setUserCard({
        id: 'add-card-modal',
        category: 'Video',
        isFavorite: false,
        isToDo: false,
        title: youtubeCardData.videoTitle,
        type: 'Youtube',
        cardData: {
          youtubeCardData,
        },
      });

      setFormData({
        category,
        title,
        url,
        youtubeCardData,
      });
    }
  }, [modalData]);

  if (formData && userCard) {
    return <AddCardModalFormComponent formData={formData} userCard={userCard} />;
  }

  return null;
};

export default AddCardModalContainer;
