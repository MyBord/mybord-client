import * as React from 'react';
import Button from 'buttons/button/button';
import PopOver from 'popOver/popOver';
import Typography from 'typography/typography';
import memo from 'utils/memo';
import { PopOverCallback, PopOverProps } from 'types/modalTypes';
import * as styles from './popConfirm.module.less';

interface Props {
  caretPlacement?: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  onConfirm: () => void;
  onMouseDown?: () => void;
  placement?: PopOverProps['placement'];
  text: string;
}

const PopConfirm: React.FC<Props> = ({
  caretPlacement = 'center',
  children,
  onConfirm,
  onMouseDown = null,
  placement = 'top-center',
  text,
}) => {
  const [hidePopOver, setHidePopOver] = React.useState<PopOverCallback['hidePopOver']>(null);

  const handleCallback = (props: PopOverCallback): void => {
    if (!hidePopOver) {
      setHidePopOver(props.hidePopOver);
    }
  };

  const handleNo = (): void => hidePopOver();

  const Content: React.FC = () => (
    <div className={styles.contentContainer} onMouseDown={onMouseDown}>
      {/* <Typography size="two" text={text} /> */}
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
      callback={handleCallback}
      caretPlacement={caretPlacement}
      placement={placement}
    >
      {children}
    </PopOver>
  );
};

export default memo(PopConfirm);
