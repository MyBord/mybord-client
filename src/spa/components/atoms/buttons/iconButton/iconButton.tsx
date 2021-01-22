import * as React from 'react';
import Icon, { IconNames } from 'icon/icon';
import { IndividualIconProps } from 'types/iconTypes';
import * as styles from './iconButton.module.less';

interface Props extends IndividualIconProps {
  className?: string;
  iconName: IconNames;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(({
  className = null,
  color,
  fill,
  iconName,
  onClick,
  size,
  strokeWidth = 2,
}, ref) => (
  <button
    className={[
      styles.button,
      className,
    ].join(' ')}
    onClick={onClick}
    ref={ref}
    type="button"
  >
    <Icon
      color={color}
      fill={fill}
      iconName={iconName}
      size={size}
      strokeWidth={strokeWidth}
    />
  </button>
));

export default IconButton;
