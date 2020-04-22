import * as React from 'react';
import Icon from 'icons/icon/icon';
import Popover from 'shared/modals/popover/popover';

const HeaderNotifications: React.FC = () => (
  <Popover content={<h1>foo bar</h1>}>
    <Icon iconName="notification" size={30} />
  </Popover>
);

export default HeaderNotifications;
