import * as React from 'react';
import { IconNames } from 'types/iconTypes';
import CalendarIcon from './individualIcons/calendarIcon';
import EyeIcon from './individualIcons/eyeIcon';
import ThumbsUpIcon from './individualIcons/thumbsUpIcon';

// declaring an iconNames from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export const iconNames = {
  calendar: 'foo',
  eye: 'foo',
  thumbsUp: 'foo',
};

interface Props {
  iconName: IconNames;
  size: number;
}

const Icon: React.FC<Props> = ({ iconName, size }) => {
  switch (iconName) {
    case 'calendar':
      return <CalendarIcon size={size} />;
    case 'eye':
      return <EyeIcon size={size} />;
    case 'thumbsUp':
      return <ThumbsUpIcon size={size} />;
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
