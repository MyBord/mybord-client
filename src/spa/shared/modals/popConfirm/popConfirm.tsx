import * as React from 'react';
import Button from 'buttons/button/button';
import PopOver from 'modals/popOver/popOver';
import Typography from 'typography/typography';
import memo from 'utils/memo';
import { PopOverProps } from 'types/modalTypes';
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
  const Content: React.FC = () => (
    <div className={styles.contentContainer}>
      <Typography size="two" text={text} />
      <div className={styles.contentButtons}>
        <Button
          label="No"
          // onClick={onHide}
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
    >
      {children}
    </PopOver>
  );
};

export default memo(PopConfirm);
