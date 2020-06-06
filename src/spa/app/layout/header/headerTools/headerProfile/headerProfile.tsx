import * as React from 'react';
import Popover from 'modals/popover/popover';
import ProfileButton from 'buttons/profileButton/profileButton';
import HeaderProfilePopoverContent from './headerProfilePopoverContent';
import * as styles from './headerProfile.module.less'; // remove?

const HeaderProfile: React.FC = () => {
  const [showPopover, setShowPopover] = React.useState<boolean>(false);

  return (
    <>
      <ProfileButton onClick={() => setShowPopover((prevState) => !prevState)} />
      <Popover
        Content={HeaderProfilePopoverContent}
        position={{ x: 1.375, y: 5.625 }}
        show={showPopover}
      />
    </>
  );
};

export default HeaderProfile;
