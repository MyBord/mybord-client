import { iconNames } from 'icons/icon/icon';
import { animatedIcons } from 'icons/animatedIcon/animatedIcon';

export type AnimatedIconNames = keyof typeof animatedIcons;
export type IconNames = keyof typeof iconNames;

export interface IndividualIconProps {
  color?: 'black' | 'orange' | 'red' | 'white';
  size: number;
  strokeWidth?: number;
}

export interface IconProps extends IndividualIconProps {
  iconName: IconNames;
}
