import * as React from 'react';
import * as Unicons from '@iconscout/react-unicons';

export const icons = {
  dashboard: 'foo',
  favorite: 'foo',
};

// declaring an IconName type from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export type IconName = keyof typeof icons;

interface Props {
  iconName: IconName;
}

const Icon: React.FC<Props> = ({ iconName }) => {
  switch (iconName) {
    case 'dashboard':
      return <Unicons.UilDesktop />;
    case 'favorite':
      return <Unicons.UilStar />;
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
