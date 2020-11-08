import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import Portal from 'portal/portal';
import ToastAnimation from 'framerMotion/toastAnimation';
import Typography from 'typography/typography';
import { useToastContext } from 'context/toastContext/toastContext';
import * as styles from './toast.module.less';

interface Props {
  delay?: boolean;
  id: string;
  text: string;
}

const Toast: React.FC<Props> = ({
  delay,
  id,
  text,
}) => {
  const { setToastId, toastId } = useToastContext();

  React.useEffect(() => {
    if (id === toastId && delay) {
      setTimeout(() => setToastId(null), 5000);
    }
  }, [toastId]);

  return (
    <Portal>
      <ToastAnimation isVisible={id === toastId}>
        <div className={styles.div}>
          <Typography
            color="blue"
            text={text}
          />
          {
            !delay && (
              <IconButton
                color="black"
                iconName="close"
                onClick={() => setToastId(null)}
                size={24}
                strokeWidth={4}
              />
            )
          }
        </div>
      </ToastAnimation>
    </Portal>
  );
};

export default Toast;
