import * as React from 'react';
import Modal from 'modals/modal/modal';
import { UserCard } from 'schema/card';
import * as styles from './imageCardModal.module.less';

interface Props {
  id: UserCard['id'];
  imageUrl: UserCard['cardData']['imageCardData']['imageUrl'];
  title: UserCard['title'];
}

const ImageCardModal: React.FC<Props> = ({
  id,
  imageUrl,
  title,
}) => (
  <Modal id={id} title={title}>
    <img
      alt={title}
      className={styles.img}
      src={imageUrl}
    />
  </Modal>
);

export default ImageCardModal;
