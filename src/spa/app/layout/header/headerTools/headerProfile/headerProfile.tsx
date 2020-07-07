import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import HeaderProfilePopOverContent from './headerProfilePopOverContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => {
  const popRef = React.useRef(null);

  console.log('888');
  console.log(popRef.current);
  const bar = (): void => {
    if (popRef.current) {
      popRef.current.setShowPopOver(false);
    }
  };

  const Content: React.FC = () => (
    <>
      <button type="button" onClick={bar}>Click Me</button>
      <HeaderProfilePopOverContent />
    </>
  );

  return (
    <PopOver Content={<Content />} placement="bottom-right" ref={popRef}>
      <div className={styles.div}>
        <Icon iconName="avatar" size={40} />
        <div className={styles.arrowDiv}>
          <Icon iconName="downArrow" size={10} />
        </div>
      </div>
    </PopOver>
  );
};

export default HeaderProfile;
