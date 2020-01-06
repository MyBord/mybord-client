import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconTypes';
import * as styles from './navigationButton.module.less';

interface Props {
  iconName: IconNames;
  link: string;
}

const NavigationButton: React.FC<Props> = ({ iconName, link }) => {
  const location = useLocation();
  const path = `/${link}`;
  return (
    <Link
      className={[
        styles.link,
        location.pathname === path ? styles.activeLink : undefined,
      ].join(' ')}
      to={path}
    >
      <Icon
        iconName={iconName}
        size={30}
      />
    </Link>
  );
};

export default NavigationButton;
