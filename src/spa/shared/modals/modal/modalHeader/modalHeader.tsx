import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import Typography from 'typography/typography';
import { ModalProps } from 'types/modalTypes';
import * as styles from './modalHeader.module.less';

interface Props {
  handleClose: () => void;
  title: ModalProps['title'];
}

const ModalHeader: React.FC<Props> = ({ handleClose, title }) => (
  <header className={styles.header}>
    <div className={styles.typographyDiv}>
      <Typography
        size="four"
        text={title}
        weight="bold"
      />
    </div>
    <div className={styles.closeDiv}>
      <IconButton
        color="black"
        iconName="close"
        onClick={handleClose}
        size={24}
        strokeWidth={4}
      />
    </div>
  </header>
);

export default ModalHeader;
