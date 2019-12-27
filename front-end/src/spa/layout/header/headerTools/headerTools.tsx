import * as React from 'react';
import Icon from 'icons/icon/icon';
import profilePhoto from 'assets/profilePhoto.jpg';
import * as styles from './headerTools.module.scss';

const HeaderTools: React.FC = () => (
  <section className={styles.section}>
    <hr className={styles.hr} />
    <Icon iconName="notification" size={30} />
    <hr className={styles.hr} />
    <div className={styles.div}>
      <img alt="profile img" className={styles.img} src={profilePhoto} />
      <Icon iconName="downArrow" size={10} />
    </div>
  </section>
);

export default HeaderTools;
