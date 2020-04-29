import * as React from 'react';
import { IndividualIconProps } from 'types/iconTypes';
import AboutIcon from './individualIcons/aboutIcon';
import AddUserIcon from './individualIcons/addUserIcon';
import AvatarIcon from './individualIcons/avatarIcon';
import BellIcon from './individualIcons/bellIcon';
import CalendarIcon from './individualIcons/calendarIcon';
import ChartIcon from './individualIcons/chartIcon';
import DashboardIcon from './individualIcons/dashboardIcon';
import DownArrowIcon from './individualIcons/downArrowIcon';
import EyeIcon from './individualIcons/eyeIcon';
import FacebookIcon from './individualIcons/facebookIcon';
import GoogleIcon from './individualIcons/googleIcon';
import LogoutIcon from './individualIcons/logoutIcon';
import MailIcon from './individualIcons/mailIcon';
import PlaylistIcon from './individualIcons/playlistIcon';
import StarIcon from './individualIcons/starIcon';
import ThumbsUpIcon from './individualIcons/thumbsUpIcon';
import WarningIcon from './individualIcons/warningIcon';

// declaring an iconNames from an object instead of an array
// (e.g. ['iconName1', 'iconName2'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export const iconNames = {
  about: 'foo',
  addUser: 'foo',
  avatar: 'foo',
  calendar: 'foo',
  chart: 'foo',
  dashboard: 'foo',
  downArrow: 'foo',
  eye: 'foo',
  facebook: 'foo',
  google: 'foo',
  logout: 'foo',
  mail: 'foo',
  notification: 'foo',
  playlist: 'foo',
  star: 'foo',
  thumbsUp: 'foo',
  warning: 'foo',
};

// This type is recreated from `iconNameTypes.ts` in order to avoid a dependency cycle
export type IconNames = keyof typeof iconNames;

export interface IconProps extends IndividualIconProps {
  iconName: IconNames;
}

const Icon: React.FC<IconProps> = ({
  color = 'black',
  iconName,
  size,
  strokeWidth = 2,
}) => {
  switch (iconName) {
    case 'about':
      return <AboutIcon color={color} size={size} />;
    case 'addUser':
      return <AddUserIcon size={size} />;
    case 'avatar':
      return <AvatarIcon size={size} />;
    case 'calendar':
      return <CalendarIcon size={size} />;
    case 'chart':
      return <ChartIcon size={size} />;
    case 'dashboard':
      return <DashboardIcon size={size} />;
    case 'downArrow':
      return <DownArrowIcon size={size} />;
    case 'eye':
      return <EyeIcon size={size} />;
    case 'facebook':
      return <FacebookIcon size={size} />;
    case 'google':
      return <GoogleIcon size={size} />;
    case 'logout':
      return <LogoutIcon color={color} size={size} />;
    case 'mail':
      return <MailIcon size={size} />;
    case 'notification':
      return <BellIcon size={size} />;
    case 'playlist':
      return <PlaylistIcon size={size} />;
    case 'star':
      return <StarIcon size={size} />;
    case 'thumbsUp':
      return <ThumbsUpIcon size={size} />;
    case 'warning':
      return (
        <WarningIcon
          color={color}
          size={size}
          strokeWidth={strokeWidth}
        />
      );
    default:
      throw Error('Component: `Icon` - iconName parameter is invalid, expected icon cannot be'
        + ' found.');
  }
};

export default Icon;
