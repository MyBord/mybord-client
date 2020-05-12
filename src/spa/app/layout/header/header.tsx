import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import HeaderAnimation from 'framerMotion/headerAnimation';
import { LOGOUT_USER } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';

const Header: React.FC = () => {
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER);
  const { setAuthenticationStatus } = useAuthenticationContext();

  const handleClick = async (): Promise<void> => {
    await LogoutUserQuery();
    setAuthenticationStatus(false);
  };

  return (
    <HeaderAnimation>
      <Button onClick={handleClick} label="Logout" />
      <HeaderTitles />
      <HeaderTools />
    </HeaderAnimation>
  );
};

export default Header;
