// This file is separately created from the `iconTypes.ts` file in order to avoid a dependency cycle

import { iconNames } from 'icons/icon/icon';
import { animatedIcons } from 'icons/animatedIcon/animatedIcon';

export type AnimatedIconNames = keyof typeof animatedIcons;
export type IconNames = keyof typeof iconNames;
