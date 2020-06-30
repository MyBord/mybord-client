import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import NotificationsButton from 'buttons/notificationsButton/notificationsButton';
import HeaderNotificationsPopOverContent from './headerNotificationsPopOverContent';

const HeaderNotifications: React.FC = () => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <NotificationsButton
        onClick={() => setShowPopOver((prevState) => !prevState)}
        ref={buttonRef}
      />
    </>
  );
};

export default HeaderNotifications;
