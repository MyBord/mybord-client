import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import NotificationsButton from 'buttons/notificationsButton/notificationsButton';
import HeaderNotificationsPopoverContent from './headerNotificationsPopoverContent';

const HeaderNotifications: React.FC = () => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <NotificationsButton
        onClick={() => setShowPopOver((prevState) => !prevState)}
        ref={buttonRef}
      />
      <PopOver
        Content={<HeaderNotificationsPopoverContent />}
        node={buttonRef}
        onHide={() => setShowPopOver(false)}
        placement="right"
        position={{ x: 6.4375, y: 5.625 }}
        show={showPopOver}
      />
    </>
  );
};

export default HeaderNotifications;
