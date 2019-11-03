import * as React from 'react';
import { IconNames } from 'types/iconTypes';
import BikeIcon from './individualIcons/bikeIcon';
import HouseIcon from './individualIcons/houseIcon';
import UserIcon from './individualIcons/userIcon';

// declaring an iconNames from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export const iconNames = {
  bike: 'foo',
  house: 'foo',
  user: 'foo',
};

interface Props {
  iconName: IconNames;
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
