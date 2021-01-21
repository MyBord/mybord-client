import * as React from 'react';
import Icon, { IconNames } from 'icon/icon';
import { IndividualIconProps } from 'types/iconTypes';
import * as styles from './iconButton.module.less';

interface Props extends IndividualIconProps {
  iconName: IconNames;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(({
  color,
  fill,
  iconName,
  onClick,
  size,
  strokeWidth = 2,
}, ref) => (
  <button
    className={[styles.button, styles[color]].join(' ')}
    onClick={onClick}
    ref={ref}
    type="button"
  >
    <Icon
      fill={fill}
      iconName={iconName}
      size={size}
      strokeWidth={strokeWidth}
    />
  </button>
));

export default IconButton;
