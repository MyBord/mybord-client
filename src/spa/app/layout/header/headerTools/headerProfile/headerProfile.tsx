import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import ProfileButton from 'buttons/profileButton/profileButton';
import HeaderProfilePopoverContent from './headerProfilePopoverContent';

const HeaderProfile: React.FC = () => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(false);
  const profileButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <ProfileButton
        onClick={() => setShowPopOver((prevState) => !prevState)}
        ref={profileButtonRef}
      />
      <PopOver
        Content={<HeaderProfilePopoverContent />}
        node={profileButtonRef}
        onHide={() => setShowPopOver(false)}
        position={{ x: 1.375, y: 5.625 }}
        show={showPopOver}
      />
    </>
  );
};

export default HeaderProfile;
