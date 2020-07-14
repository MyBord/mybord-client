import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import HeaderProfileContent from './headerProfileContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => (
  <PopOver Content={<HeaderProfileContent />} placement="bottom-right">
    <div className={styles.div}>
      <Icon iconName="avatar" size={40} />
      <div className={styles.arrowDiv}>
        <Icon iconName="downArrow" size={10} />
      </div>
    </div>
  </PopOver>
);

export default HeaderProfile;
