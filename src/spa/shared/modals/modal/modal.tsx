import * as React from 'react';
import ModalAnimation from 'framerMotion/modalAnimation';
import Portal from 'portal/portal';
import { ModalProps } from 'types/modalTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import ModalBackground from './modalBackground/modalBackground';
import ModalHeader from './modalHeader/modalHeader';

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
          <ModalHeader handleClose={handleClose} title={title} />
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
