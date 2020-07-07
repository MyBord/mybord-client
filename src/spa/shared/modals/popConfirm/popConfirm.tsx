import * as React from 'react';
import Button from 'buttons/button/button';
import PopOver from 'modals/popOver/popOver';
import Typography from 'typography/typography';
import memo from 'utils/memo';
import { PopOverHandle, PopOverProps } from 'types/modalTypes';
import * as styles from './popConfirm.module.less';

interface Props {
  caretPlacement?: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  onConfirm: () => void;
  placement?: PopOverProps['placement'];
  text: string;
}

const PopConfirm: React.FC<Props> = ({
  caretPlacement = 'center',
  children,
  onConfirm,
  placement = 'top-center',
  text,
}) => {
  const popOverRef = React.useRef<PopOverHandle>(null);

  const handleNo = (): void => {
    if (popOverRef.current) {
      popOverRef.current.setShowPopOver(false);
    }
  };

  const Content: React.FC = () => (
    <div className={styles.contentContainer}>
      <Typography size="two" text={text} />
      <div className={styles.contentButtons}>
        <Button
          label="No"
          onClick={handleNo}
          size="small"
          type="secondary"
        />
        <Button
          label="Yes"
          onClick={onConfirm}
          size="small"
        />
      </div>
    </div>
  );

  return (
    <PopOver
      Content={<Content />}
      caretPlacement={caretPlacement}
      placement={placement}
      ref={popOverRef}
    >
      {children}
    </PopOver>
  );
};

export default memo(PopConfirm);
