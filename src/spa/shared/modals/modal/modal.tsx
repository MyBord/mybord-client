import * as React from 'react';
import ModalAnimation from 'framerMotion/modalAnimation';
import Portal from 'portal/portal';
import { ModalProps } from 'types/modalTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import ModalHeader from './modalHeader/modalHeader';

const Modal: React.FC<ModalProps> = ({
  children,
  defaultVisible = false,
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

  return (
    <Portal>
      <ModalAnimation isVisible={id === modalId}>
        <ModalHeader handleClose={handleClose} title={title} />
        {children}
      </ModalAnimation>
    </Portal>
  );
};

export default Modal;
