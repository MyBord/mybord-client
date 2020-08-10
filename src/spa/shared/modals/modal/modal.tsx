import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import Portal from 'portal/portal';
import Typography from 'typography/typography';
import { ModalProps } from 'types/modalTypes';
import * as styles from './modal.module.less';

const Modal: React.FC<ModalProps> = ({
  children,
  defaultVisible = false,
  title,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);

  const handleClose = (): void => setIsVisible(false);

  return (
    <>
      <button type="button" onClick={() => setIsVisible((prevState) => !prevState)}>Toggle</button>
      {
        isVisible && (
          <Portal>
            <section className={styles.section}>
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
            </section>
          </Portal>
        )
      }
    </>
  );
};

export default Modal;
