import * as React from 'react';
import Modal from 'modals/modal/modal';
import { UserCardData } from 'schema/card';
import * as styles from './gifCardModal.module.less';

interface Props {
  gifUrl: UserCardData['cardData']['gifCardData']['gifUrl'];
  id: UserCardData['id'];
  title: UserCardData['title'];
}

const ImageCardModal: React.FC<Props> = ({
  gifUrl,
  id,
  title,
}) => (
  <Modal id={id} title={title}>
    <img
      alt={title}
      className={styles.img}
      src={gifUrl}
    />
  </Modal>
);

export default ImageCardModal;
