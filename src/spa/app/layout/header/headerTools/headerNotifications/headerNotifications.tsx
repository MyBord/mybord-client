import * as React from 'react';
import Popover from 'modals/popover/popover';
import NotificationsButton from 'buttons/notificationsButton/notificationsButton';
import HeaderNotificationsPopoverContent from './headerNotificationsPopoverContent';

const HeaderNotifications: React.FC = () => {
  const [showPopover, setShowPopover] = React.useState<boolean>(false);

  return (
    <>
      <NotificationsButton onClick={() => setShowPopover((prevState) => !prevState)} />
      <Popover
        Content={HeaderNotificationsPopoverContent}
        placement="right"
        position={{ x: 6.4375, y: 5.625 }}
        show={showPopover}
      />
    </>
  )
};

export default HeaderNotifications;
