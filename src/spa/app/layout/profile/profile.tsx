import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import ProfileContent from './profileContent';
import * as styles from './profile.module.less';

const Profile: React.FC = () => (
  <PopOver Content={<ProfileContent />} placement="bottom-right">
    <div className={styles.div}>
      <Icon iconName="avatar" size={40} />
    </div>
  </PopOver>
);

export default Profile;
