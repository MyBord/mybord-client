// This file is separately created from the `iconTypes.ts` file in order to avoid a dependency cycle

import { iconNames } from 'icon/icon';

export type IconNames = keyof typeof iconNames;
