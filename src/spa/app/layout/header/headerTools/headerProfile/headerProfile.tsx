import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import ProfileButton from 'buttons/profileButton/profileButton';
import HeaderProfilePopOverContent from './headerProfilePopOverContent';

const HeaderProfile: React.FC = () => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(false);
  const profileButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <ProfileButton
        onClick={() => setShowPopOver((prevState) => !prevState)}
        ref={profileButtonRef}
      />
    </>
  );
};

export default HeaderProfile;
