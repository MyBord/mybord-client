import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Typography from 'typography/typography';
import { LOGOUT_USER } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './headerProfile.module.less';

const HeaderProfilePopoverContent: React.FC = () => {
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER);
  const { unAuthenticateUser } = useAuthenticationContext();

  const handleClick = async (): Promise<void> => {
    await LogoutUserQuery();
    unAuthenticateUser();
  };

  return (
    <ul className={styles.ul}>
      <li>
        <Typography
          iconName="logout"
          onClick={handleClick}
          size="three"
          text="Logout"
        />
      </li>
      <li>
        <Typography
          iconName="about"
          link="trending"
          size="three"
          text="About MyBord"
        />
      </li>
    </ul>
  );
};

export default HeaderProfilePopoverContent;
