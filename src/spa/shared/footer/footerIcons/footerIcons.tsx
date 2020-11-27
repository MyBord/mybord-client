import * as React from 'react';
import Icon from 'icon/icon';
import { FooterProps } from 'types/footerTypes';
import * as styles from './footerIcons.module.less';

const CopyrightContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.copyrightDiv}>
    <Icon color={isApp ? 'black' : 'white'} iconName="copyright" size={20} />
  </div>
);

const EmailContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.iconDiv}>
    <Icon color={isApp ? 'blue' : 'white'} iconName="paperAirplane" size={24} strokeWidth={4} />
  </div>
);

const FacebookContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.iconDiv}>
    <Icon color={isApp ? 'blue' : 'white'} iconName="facebook" size={24} />
  </div>
);

const InstagramContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.iconDiv}>
    <Icon color={isApp ? 'blue' : 'white'} iconName="instagram" size={24} />
  </div>
);

const LinkedinContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.iconDiv}>
    <Icon color={isApp ? 'blue' : 'white'} iconName="linkedin" size={24} />
  </div>
);

const TwitterContent: React.FC<FooterProps> = ({ isApp }) => (
  <div className={styles.iconDiv}>
    <Icon color={isApp ? 'blue' : 'white'} iconName="twitter" size={24} />
  </div>
);

export default {
  CopyrightContent,
  EmailContent,
  FacebookContent,
  InstagramContent,
  LinkedinContent,
  TwitterContent,
};
