import * as React from 'react';
import Popover from 'modals/popover/popover';
import ProfileButton from 'buttons/profileButton/profileButton';
import HeaderProfilePopoverContent from './headerProfilePopoverContent';

const HeaderProfile: React.FC = () => {
  const [showPopover, setShowPopover] = React.useState<boolean>(false);
  const profileButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <ProfileButton
        onClick={() => setShowPopover((prevState) => !prevState)}
        ref={profileButtonRef}
      />
      <Popover
        Content={HeaderProfilePopoverContent}
        node={profileButtonRef}
        position={{ x: 1.375, y: 5.625 }}
        show={showPopover}
      />
    </>
  );
};

export default HeaderProfile;
