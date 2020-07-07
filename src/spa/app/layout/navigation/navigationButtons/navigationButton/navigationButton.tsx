import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Icon from 'icons/icon/icon';
import Tooltip from 'modals/tooltip/tooltip';
import { IconNames } from 'types/iconNameTypes';
import * as styles from './navigationButton.module.less';

interface Props {
  iconName: IconNames;
  link: string;
  pageTitle: string;
}

const NavigationButton: React.FC<Props> = ({ iconName, link, pageTitle }) => {
  const location = useLocation();
  const path = `/${link}`;
  return (
    <Tooltip delay={1000} placement="right-center" text={pageTitle}>
      <Link
        className={[
          styles.link,
          location.pathname === path ? styles.activeLink : undefined,
        ].join(' ')}
        to={path}
      >
        <Icon iconName={iconName} size={30} />
      </Link>
    </Tooltip>
  );
};

export default NavigationButton;
