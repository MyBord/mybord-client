import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import { LOGOUT_USER } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';
import HeaderTitleButton from './headerTitleButton/headerTitleButton';
import * as styles from './headerTitles.module.less';

const HeaderTitles: React.FC = () => {
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER);
  const { setAuthenticationStatus } = useAuthenticationContext();

  const handleClick = async (): Promise<void> => {
    await LogoutUserQuery();
    setAuthenticationStatus(false);
  };

  return (
    <div className={styles.div}>
      <Button label="Logout" onClick={handleClick} />
      <HeaderTitleButton label="MyBord" link="myBord" />
      <HeaderTitleButton label="Trending" link="trending" />
      <HeaderTitleButton label="Following" link="following" />
    </div>
  );
};

export default HeaderTitles;
