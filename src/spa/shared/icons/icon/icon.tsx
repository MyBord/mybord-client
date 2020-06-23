import * as React from 'react';
import { IndividualIconProps } from 'types/iconTypes';
import AboutIcon from './individualIcons/aboutIcon';
import AddUserIcon from './individualIcons/addUserIcon';
import AvatarIcon from './individualIcons/avatarIcon';
import BellIcon from './individualIcons/bellIcon';
import CalendarIcon from './individualIcons/calendarIcon';
import ChartIcon from './individualIcons/chartIcon';
import CloseIcon from './individualIcons/closeIcon';
import DashboardIcon from './individualIcons/dashboardIcon';
import DeleteIcon from './individualIcons/deleteIcon';
import DownArrowIcon from './individualIcons/downArrowIcon';
import EyeIcon from './individualIcons/eyeIcon';
import FacebookIcon from './individualIcons/facebookIcon';
import FilterIcon from './individualIcons/filterIcon';
import GoogleIcon from './individualIcons/googleIcon';
import HeartIcon from './individualIcons/heartIcon';
import LogoutIcon from './individualIcons/logoutIcon';
import MailIcon from './individualIcons/mailIcon';
import PencilIcon from './individualIcons/pencilIcon';
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
  close: 'foo',
  dashboard: 'foo',
  delete: 'foo',
  downArrow: 'foo',
  eye: 'foo',
  facebook: 'foo',
  filter: 'foo',
  google: 'foo',
  heart: 'foo',
  logout: 'foo',
  mail: 'foo',
  notification: 'foo',
  pencil: 'foo',
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
  fill = null,
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
    case 'close':
      return <CloseIcon color={color} size={size} />;
    case 'dashboard':
      return <DashboardIcon size={size} />;
    case 'delete':
      return <DeleteIcon color={color} fill={fill} size={size} />;
    case 'downArrow':
      return <DownArrowIcon size={size} />;
    case 'eye':
      return <EyeIcon size={size} />;
    case 'facebook':
      return <FacebookIcon size={size} />;
    case 'filter':
      return <FilterIcon color={color} size={size} />;
    case 'google':
      return <GoogleIcon size={size} />;
    case 'heart':
      return <HeartIcon color={color} fill={fill} size={size} />;
    case 'logout':
      return <LogoutIcon color={color} size={size} />;
    case 'mail':
      return <MailIcon size={size} />;
    case 'notification':
      return <BellIcon size={size} />;
    case 'pencil':
      return <PencilIcon color={color} fill={fill} size={size} />;
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
