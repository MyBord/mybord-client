import * as React from 'react';
import IconButton from 'buttons/iconButton/iconButton';
import ModalAnimation from 'animations/modalAnimation';
import ModalBackground from 'backgrounds/modalBackground/modalBackground';
import Portal from 'portal/portal';
import Typography from 'typography/typography';
import { ModalProps } from 'types/modalTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import * as styles from './modal.module.less';

const Modal: React.FC<ModalProps> = ({
  children,
  defaultVisible = false,
  hasOverlay = true,
  id,
  title,
}) => {
  const { modalId, setModalId } = useModalContext();

  const handleClose = (): void => {
    setModalId(null);
  };

  React.useEffect(() => {
    if (defaultVisible) {
      setModalId(id);
    }
  }, [defaultVisible]);

  const isVisible = id === modalId;

  return (
    <>
      <Portal>
        <ModalAnimation isVisible={isVisible}>
          <header className={styles.header}>
            <div className={styles.typographyDiv}>
              {/* <Typography */}
              {/*  size="four" */}
              {/*  text={title} */}
              {/*  weight="bold" */}
              {/* /> */}
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
      {
        isVisible && hasOverlay && <ModalBackground />
      }
    </>
  );
};

export default Modal;
