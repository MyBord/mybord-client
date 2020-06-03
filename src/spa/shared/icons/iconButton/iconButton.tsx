import * as React from 'react';
import Icon from 'icons/icon/icon';
import { IndividualIconProps } from 'types/iconTypes';
import { IconNames } from 'icons/icon/icon';
import * as styles from './iconButton.module.less';

interface Props extends IndividualIconProps {
  iconName: IconNames;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<Props> = ({
  color = 'white',
  fill = null,
  iconName,
  onClick,
  size,
  strokeWidth = 2,
}) => (
  <button
    className={[styles.button, styles[color]].join(' ')}
    type="button"
    onClick={onClick}
  >
    <Icon
      color={color}
      fill={fill}
      iconName={iconName}
      strokeWidth={strokeWidth}
      size={size}
    />
  </button>
);

export default IconButton;
