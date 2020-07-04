import * as React from 'react';
import Icon from 'icons/icon/icon';
import Portal from 'shared/portal/portal';
import { PopOverStyle } from 'types/modalTypes';
import getPopOverStyle from './getPopOverStyle';
import * as styles from './popOverTwo.module.less';

interface Props {
  children: React.ReactElement;
}

const PopOver: React.FC<Props> = ({ children }) => {
  const [childRef, setChildRef] = React.useState<HTMLElement>(null);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildRef(node) },
  );

  React.useEffect(() => {
    console.log('aaa');
    if (childRef) {
      console.log('bbb');
      console.log(childRef.getBoundingClientRect());
      console.log(childRef.offsetTop);
      console.log(childRef.offsetLeft);
      setPopOverStyle(getPopOverStyle(childRef.getBoundingClientRect()));
    }
  }, [childRef]);

  return (
    <>
      {newChildren}
      <Portal>
        <div
          className={styles.modal}
          style={popOverStyle}
        />
      </Portal>
    </>
  );
};

const PopOverFinal: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.div}>
      <Icon iconName="monkey" size={50} />
      <Icon iconName="avatar" size={50} />
      <PopOver>
        <div className={styles.box}>hello world</div>
      </PopOver>
    </div>
  </div>
);

export default PopOverFinal;
