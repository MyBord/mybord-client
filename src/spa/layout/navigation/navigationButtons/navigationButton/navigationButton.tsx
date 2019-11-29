import * as React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconTypes';
import * as styles from './navigationButton.module.scss';

interface Props {
  iconName: IconNames;
  link: string;
}

const NavigationButton: React.FC<Props> = ({ iconName, link }) => (
  <Link
    className={styles.link}
    to={`/${link}`}
  >
    <Icon
      iconName={iconName}
      size={30}
    />
  </Link>
);

export default NavigationButton;
