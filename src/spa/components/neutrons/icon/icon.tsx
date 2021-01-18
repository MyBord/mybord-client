import * as React from 'react';
import { IndividualIconProps } from 'types/iconTypes';
const SearchIcon = React.lazy(() => import('./individualIcons/searchIcon'));
const SendIcon = React.lazy(() => import('./individualIcons/sendIcon'));

// declaring an iconNames from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export const iconNames = {
  search: 'foo',
  send: 'foo',
};

// This type is recreated from `iconNameTypes.ts` in order to avoid a dependency cycle
export type IconNames = keyof typeof iconNames;

export interface IconProps extends IndividualIconProps {
  iconName: IconNames;
}

const Icon: React.FC<IconProps> = ({
  color = 'black',
  fill = null,
  iconName,
  size,
  strokeWidth = 2,
}) => {
  switch (iconName) {
    case 'search':
      return <SearchIcon color={color} size={size} strokeWidth={strokeWidth} />;
    case 'send':
      return <SendIcon color={color} size={size} strokeWidth={strokeWidth} />;
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
