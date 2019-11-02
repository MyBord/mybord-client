import * as React from 'react';
import BikeIcon from './individualIcons/bikeIcon';
import HouseIcon from './individualIcons/houseIcon';
import UserIcon from './individualIcons/userIcon';

export const icons = {
  bike: 'foo',
  house: 'foo',
  user: 'foo',
};

// declaring an IconName type from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export type IconName = keyof typeof icons;

interface Props {
  iconName: IconName;
  size: number;
}

const Icon: React.FC<Props> = ({ iconName, size }) => {
  switch (iconName) {
    case 'bike':
      return <BikeIcon size={size} />;
    case 'house':
      return <HouseIcon size={size} />;
    case 'user':
      return <UserIcon size={size} />;
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
