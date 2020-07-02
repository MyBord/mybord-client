import * as React from 'react';
import PopOverContainer from 'modals/popOver/popOverContainer';
import NotificationsButton from 'buttons/notificationsButton/notificationsButton';
import HeaderNotificationsPopOverContent from './headerNotificationsPopOverContent';

const HeaderNotifications: React.FC = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <PopOverContainer
        Content={<HeaderNotificationsPopOverContent />}
        placement="bottom-center"
      >
        <NotificationsButton ref={buttonRef} />
      </PopOverContainer>
    </>
  );
};

export default HeaderNotifications;
