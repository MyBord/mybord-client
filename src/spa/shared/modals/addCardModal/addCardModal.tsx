import * as React from 'react';
import Modal from 'modals/modal/modal';
import YoutubeCard from 'cards/youtubeCard/youtubeCard';
import memo from 'utils/memo';
import { AddCardModalProps } from 'types/modalTypes';
import { UserCard } from 'schema/card';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import * as styles from './addCardModal.module.less';

const AddCardModal: React.FC<AddCardModalProps> = ({ cardData }) => {
  const [previewCardData, setPreviewCardData] = React.useState<UserCard>(null);

  React.useEffect(() => {
    if (cardData && cardData.youtubeCardData) {
      setPreviewCardData({
        id: 'add-card-modal',
        isFavorite: false,
        isToDo: false,
        type: 'Youtube',
        cardData: {
          youtubeCardData: cardData.youtubeCardData,
        },
      });
    }
  }, [cardData]);

  return (
    <Modal id="add-card-modal" title="Add To My Bord">
      <div className={styles.parentDiv}>
        <div className={styles.previewDiv}>
          {
            previewCardData && <YoutubeCard isPreview userCard={previewCardData} />
          }
        </div>
        <div className={styles.formDiv}>
          <AddCardModalForm cardData={cardData} />
        </div>
      </div>
    </Modal>
  );
};

export default memo(AddCardModal);
