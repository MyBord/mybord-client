import * as React from 'react';
import ModalAnimation from 'framerMotion/modalAnimation';
import Portal from 'portal/portal';
import { ModalProps } from 'types/modalTypes';
import ModalFooter from './modalFooter/modalFooter';
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
        hideModal: () => () => setIsVisible(false),
        isVisible,
        showModal: () => () => setIsVisible(true),
      });
    }
  }, [callback, isVisible]);

  return (
    <Portal>
      <ModalAnimation isVisible={isVisible}>
        <ModalHeader handleClose={handleClose} title={title} />
        {children}
        <ModalFooter />
      </ModalAnimation>
    </Portal>
  );
};

export default Modal;
