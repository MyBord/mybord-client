import * as React from 'react';
import Portal from 'portal/portal';
import { ModalProps } from 'types/modalTypes';
import IconButton from 'icons/iconButton/iconButton';
import * as styles from './modal.module.less';

const Modal: React.FC<ModalProps> = ({
  children,
  defaultVisible = false,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);

  return (
    <>
      <button type="button" onClick={() => setIsVisible((prevState) => !prevState)}>Toggle</button>
      {
        isVisible && (
          <Portal>
            <section className={styles.section}>
              <IconButton color="black" iconName="close" size={100} />
              {children}
            </section>
          </Portal>
        )
      }
    </>
  );
};

export default Modal;
