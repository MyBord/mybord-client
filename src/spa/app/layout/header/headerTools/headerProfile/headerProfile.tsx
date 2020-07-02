import * as React from 'react';
import PopOverContainer from 'modals/popOver/popOverContainer';
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
      {/* <PopOverContainer */}
      {/*  Content={<HeaderProfilePopOverContent />} */}
      {/*  node={profileButtonRef} */}
      {/*  onHide={() => setShowPopOver(false)} */}
      {/*  position={{ x: 1.375, y: 5.625 }} */}
      {/*  show={showPopOver} */}
      {/* /> */}
    </>
  );
};

export default HeaderProfile;
