import * as React from 'react';
// @ts-expect-error foo
import { useHistory } from 'react-router';
import { useLazyQuery } from '@apollo/react-hooks';
import Icon from 'icon/icon';
import Typography from 'typography/typography';
import { LOGOUT_USER_QUERY } from 'schema/user';
import { PopOverCallback } from 'types/modalTypes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import * as styles from './headerProfile.module.less';

interface Props {
  hidePopOver: PopOverCallback['hidePopOver'];
}

const HeaderProfileContent: React.FC<Props> = ({ hidePopOver }) => {
  const history = useHistory();
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER_QUERY);
  const { setAuthenticationStatus } = useCurrentUserContext();

  const handleLogout = async (): Promise<void> => {
    await LogoutUserQuery();
    setAuthenticationStatus(false);
    history.push('/');
  };

  // const AboutIconContent: React.FC = () => <Icon color="blue" iconName="about" size={18} />;
  // const SettingsIconContent: React.FC = () => <Icon color="blue" iconName="settings" size={18} />;
  // const LogoutIconContent: React.FC = () => <Icon color="blue" iconName="logout" size={18} />;

  return (
    <ul className={styles.ul}>
      <li>
        {/* <Typography */}
        {/*  Content={SettingsIconContent} */}
        {/*  link="settings" */}
        {/*  size="three" */}
        {/*  text="Settings" */}
        {/*  onClick={hidePopOver} */}
        {/* /> */}
      </li>
      <li>
        {/* <Typography */}
        {/*  Content={AboutIconContent} */}
        {/*  link="about" */}
        {/*  size="three" */}
        {/*  text="About MyBord" */}
        {/*  onClick={hidePopOver} */}
        {/* /> */}
      </li>
      <li>
        {/* <Typography */}
        {/*  Content={LogoutIconContent} */}
        {/*  onClick={handleLogout} */}
        {/*  size="three" */}
        {/*  text="Logout" */}
        {/* /> */}
      </li>
    </ul>
  );
};

export default HeaderProfileContent;
