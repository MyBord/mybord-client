import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOverContainer from 'modals/popOver/popOverContainer';
import HeaderProfilePopOverContent from './headerProfilePopOverContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => (
  <PopOverContainer Content={<HeaderProfilePopOverContent />} placement="bottom-right">
    <div className={styles.div}>
      <Icon iconName="avatar" size={40} />
      <div className={styles.arrowDiv}>
        <Icon iconName="downArrow" size={10} />
      </div>
    </div>
  </PopOverContainer>
);

export default HeaderProfile;
