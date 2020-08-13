import * as React from 'react';
import ModalAnimation from 'framerMotion/modalAnimation';
import Portal from 'portal/portal';
import { ModalProps } from 'types/modalTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import ModalHeader from './modalHeader/modalHeader';

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
        isVisible,
        setIsVisible: () => setIsVisible,
      });
    }
  }, [callback, isVisible]);

  return (
    <Portal>
      <ModalAnimation isVisible={isVisible}>
        <ModalHeader handleClose={handleClose} title={title} />
        {children}
      </ModalAnimation>
    </Portal>
  );
};

export default Modal;
