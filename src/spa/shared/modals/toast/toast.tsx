import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import Portal from 'portal/portal';
import Typography from 'typography/typography';
import { useToastContext } from 'context/toastContext/toastContext';
import * as styles from './toast.module.less';

interface Props {
  id: string;
  text: string;
}

const Toast: React.FC<Props> = ({ id, text }) => {
  const { toastId } = useToastContext();

  const isVisible = id === toastId;

  return (
    <Portal>
      <section className={styles.section}>
        <div className={styles.div}>
          <Typography
            color="blue"
            text={text}
          />
          <IconButton
            color="black"
            iconName="close"
            // onClick={handleClose}
            size={24}
            strokeWidth={4}
          />
        </div>
      </section>
    </Portal>
  );
};

export default Toast;
