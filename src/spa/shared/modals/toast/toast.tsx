import * as React from 'react';
import Icon from 'icon/icon';
import IconButton from 'buttons/iconButton/iconButton';
import Portal from 'portal/portal';
import ToastAnimation from 'framerMotion/toastAnimation';
import Typography from 'typography/typography';
import { ExportedColors } from 'types/colorTypes';
import { useToastContext } from 'context/toastContext/toastContext';
import * as styles from './toast.module.less';

interface Props {
  delay?: boolean;
  id: string;
  text: string;
  type: 'error' | 'success' | 'warning';
}

const Toast: React.FC<Props> = ({
  delay,
  id,
  text,
  type,
}) => {
  const { setToastId, toastId } = useToastContext();

  React.useEffect(() => {
    if (id === toastId && delay) {
      setTimeout(() => setToastId(null), 5000);
    }
  }, [toastId]);

  const getIconColor = (): ExportedColors => {
    switch (type) {
      case 'error':
        return 'red';
      case 'success':
        return 'green';
      case 'warning':
        return 'yellow';
      default:
        throw Error('unsupported icon type');
    }
  };

  return (
    <Portal>
      <ToastAnimation isVisible={id === toastId}>
        <div className={styles.divContainer}>
          <div className={styles.iconDiv}>
            <Icon
              color={getIconColor()}
              iconName={type === 'error' ? 'warning' : type}
              size={24}
              strokeWidth={type === 'warning' ? 5 : 4}
            />
          </div>
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
