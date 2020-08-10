import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import ModalAnimation from 'framerMotion/modalAnimation';
import Portal from 'portal/portal';
import Typography from 'typography/typography';
import { ModalProps } from 'types/modalTypes';
import * as styles from './modal.module.less';

const Modal: React.FC<ModalProps> = ({
  callback,
  children,
  defaultVisible = false,
  title,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);

  const handleClose = (): void => setIsVisible(false);

  React.useEffect(() => {
    if (callback) {
      callback({
        hideModal: () => () => setIsVisible(false),
        isVisible,
        showModal: () => () => setIsVisible(true),
      });
    }
  }, [callback, isVisible]);

  return (
    <Portal>
      <ModalAnimation isVisible={isVisible}>
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
        {children}
      </ModalAnimation>
    </Portal>
  );
};

export default Modal;
