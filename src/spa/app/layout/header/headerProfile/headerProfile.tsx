import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import HeaderProfileContent from './headerProfileContent';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => {
  const { isAnimationComplete, isHydrated } = useHydrationContext();

  if (isAnimationComplete && isHydrated) {
    return (
      <PopOver
        Content={<HeaderProfileContent />}
        placement="bottom-right"
        position={{
          top: -16,
        }}
      >
        <div className={styles.div}>
          <Icon iconName="avatar" size={40} />
        </div>
      </PopOver>
    );
  }

  return null;
};

export default HeaderProfile;
