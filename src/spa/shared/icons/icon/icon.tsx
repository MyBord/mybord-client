import * as React from 'react';
import { IndividualIconProps } from 'types/iconTypes';
const AboutIcon = React.lazy(() => import('./individualIcons/aboutIcon'));
const AddUserIcon = React.lazy(() => import('./individualIcons/addUserIcon'));
const AvatarIcon = React.lazy(() => import('./individualIcons/avatarIcon'));
const BellIcon = React.lazy(() => import('./individualIcons/bellIcon'));
const CalendarIcon = React.lazy(() => import('./individualIcons/calendarIcon'));
const ChartIcon = React.lazy(() => import('./individualIcons/chartIcon'));
const CloseIcon = React.lazy(() => import('./individualIcons/closeIcon'));
const DashboardIcon = React.lazy(() => import('./individualIcons/dashboardIcon'));
const DeleteIcon = React.lazy(() => import('./individualIcons/deleteIcon'));
const DownArrowIcon = React.lazy(() => import('./individualIcons/downArrowIcon'));
const EyeIcon = React.lazy(() => import('./individualIcons/eyeIcon'));
const FacebookIcon = React.lazy(() => import('./individualIcons/facebookIcon'));
const FilterIcon = React.lazy(() => import('./individualIcons/filterIcon'));
const GoogleIcon = React.lazy(() => import('./individualIcons/googleIcon'));
const HeartIcon = React.lazy(() => import('./individualIcons/heartIcon'));
const InstagramIcon = React.lazy(() => import('./individualIcons/instagramIcon'));
const LogoutIcon = React.lazy(() => import('./individualIcons/logoutIcon'));
const MailIcon = React.lazy(() => import('./individualIcons/mailIcon'));
const MonkeyIcon = React.lazy(() => import('./individualIcons/monkeyIcon'));
const PaperAirplaneIcon = React.lazy(() => import('./individualIcons/paperAirplaneIcon'));
const PencilIcon = React.lazy(() => import('./individualIcons/pencilIcon'));
const PlaylistIcon = React.lazy(() => import('./individualIcons/playlistIcon'));
const StarIcon = React.lazy(() => import('./individualIcons/starIcon'));
const ThumbsUpIcon = React.lazy(() => import('./individualIcons/thumbsUpIcon'));
const WarningIcon = React.lazy(() => import('./individualIcons/warningIcon'));

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
  instagram: 'foo',
  logout: 'foo',
  mail: 'foo',
  monkey: 'foo',
  notification: 'foo',
  paperAirplane: 'foo',
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
      return <FacebookIcon color={color} size={size} />;
    case 'filter':
      return <FilterIcon color={color} size={size} />;
    case 'google':
      return <GoogleIcon size={size} />;
    case 'heart':
      return <HeartIcon color={color} fill={fill} size={size} />;
    case 'instagram':
      return <InstagramIcon color={color} size={size} />;
    case 'logout':
      return <LogoutIcon color={color} size={size} />;
    case 'mail':
      return <MailIcon color={color} size={size} />;
    case 'monkey':
      return <MonkeyIcon size={size} />;
    case 'notification':
      return <BellIcon size={size} />;
    case 'paperAirplane':
      return <PaperAirplaneIcon color={color} size={size} />;
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
