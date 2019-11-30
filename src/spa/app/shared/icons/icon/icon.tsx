import * as React from 'react';
import { IconNames } from 'types/iconTypes';
import AddUserIcon from './individualIcons/addUserIcon';
import CalendarIcon from './individualIcons/calendarIcon';
import ChartIcon from './individualIcons/chartIcon';
import DashboardIcon from './individualIcons/dashboardIcon';
import EyeIcon from './individualIcons/eyeIcon';
import MailIcon from './individualIcons/mailIcon';
import PlaylistIcon from './individualIcons/playlistIcon';
import StarIcon from './individualIcons/starIcon';
import ThumbsUpIcon from './individualIcons/thumbsUpIcon';

// declaring an iconNames from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export const iconNames = {
  addUser: 'foo',
  calendar: 'foo',
  chart: 'foo',
  dashboard: 'foo',
  eye: 'foo',
  mail: 'foo',
  playlist: 'foo',
  star: 'foo',
  thumbsUp: 'foo',
};

interface Props {
  iconName: IconNames;
  size: number;
}

const Icon: React.FC<Props> = ({ iconName, size }) => {
  switch (iconName) {
    case 'addUser':
      return <AddUserIcon size={size} />;
    case 'calendar':
      return <CalendarIcon size={size} />;
    case 'chart':
      return <ChartIcon size={size} />;
    case 'dashboard':
      return <DashboardIcon size={size} />;
    case 'eye':
      return <EyeIcon size={size} />;
    case 'mail':
      return <MailIcon size={size} />;
    case 'playlist':
      return <PlaylistIcon size={size} />;
    case 'star':
      return <StarIcon size={size} />;
    case 'thumbsUp':
      return <ThumbsUpIcon size={size} />;
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
