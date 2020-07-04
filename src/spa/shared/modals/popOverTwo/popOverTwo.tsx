const caretOptions = [
  {
    label: 'bottom',
    value: 'bottom',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'right',
    value: 'right',
  },
  {
    label: 'top',
    value: 'top',
  },
];

const selectOptions = [
  {
    label: 'bottom-center',
    value: 'bottom-center',
  },
  {
    label: 'bottom-left',
    value: 'bottom-left',
  },
  {
    label: 'bottom-right',
    value: 'bottom-right',
  },
  {
    label: 'left-bottom',
    value: 'left-bottom',
  },
  {
    label: 'left-center',
    value: 'left-center',
  },
  {
    label: 'left-top',
    value: 'left-top',
  },
  {
    label: 'right-bottom',
    value: 'right-bottom',
  },
  {
    label: 'right-center',
    value: 'right-center',
  },
  {
    label: 'right-top',
    value: 'right-top',
  },
  {
    label: 'top-center',
    value: 'top-center',
  },
  {
    label: 'top-left',
    value: 'top-left',
  },
  {
    label: 'top-right',
    value: 'top-right',
  },
];

import * as React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/index.less';
import Icon from 'icons/icon/icon';
import Portal from 'shared/portal/portal';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import getPopOverStyle from './getPopOverStyle';
import * as styles from './popOverTwo.module.less';

const PopOverContent: React.FC = () => (
  <div className={styles.content}>
    <h3>This is some content</h3>
  </div>
);

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPlacement = null,
  children,
  placement = 'bottom-center',
}) => {
  const [childRef, setChildRef] = React.useState<HTMLElement>(null);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildRef(node) },
  );

  React.useEffect(() => {
    if (childRef && popOverRef.current) {
      const childRect = childRef.getBoundingClientRect();
      const popOverRect = popOverRef.current.getBoundingClientRect();
      const style = getPopOverStyle(childRect, popOverRect, placement, !!caretPlacement);
      setPopOverStyle(style);
    }
  }, [caretPlacement, childRef, placement, popOverRef]);

  return (
    <>
      {newChildren}
      <Portal>
        <div
          className={styles.popOver}
          ref={popOverRef}
          style={popOverStyle}
        >
          {Content}
        </div>
      </Portal>
    </>
  );
};

const PopOverFinal: React.FC = () => {
  const [caret, setCaret] = React.useState(null);
  const [placement, setPlacement] = React.useState('top-center');

  // @ts-ignore
  const handleCaret = (value: string): void => setCaret(value);

  // @ts-ignore
  const handlePlacement = (value: string): void => setPlacement(value);

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <Select onChange={handleCaret}>
          {caretOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className={styles.select}>
        <Select onChange={handlePlacement}>
          {selectOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className={styles.div}>
        <Icon iconName="monkey" size={50} />
        <Icon iconName="avatar" size={50} />
        <PopOver
          Content={<PopOverContent />}
          caretPlacement={caret}
          // @ts-ignore
          placement={placement}
        >
          <div className={styles.box}>hello world</div>
        </PopOver>
      </div>
    </div>
  );
};

export default PopOverFinal;
