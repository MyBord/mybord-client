import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import ProfileContent from './profileContent';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './profile.module.less';

const Profile: React.FC = () => {
  const { isAnimationComplete, isHydrated } = useHydrationContext();

  if (isAnimationComplete && isHydrated) {
    return (
      <PopOver Content={<ProfileContent />} placement="bottom-right">
        <div className={styles.div}>
          <Icon iconName="avatar" size={40} />
        </div>
      </PopOver>
    );
  }

  return null;
};

export default Profile;
