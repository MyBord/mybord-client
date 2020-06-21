import * as React from 'react';
import Button from 'buttons/button/button';
import PopOver from 'modals/popOver/popover';
import Typography from 'typography/typography';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popConfirm.module.less';

interface Props extends PopOverProps {
  node: React.RefObject<HTMLElement>;
  onHide: () => void;
  text: string;
}

const PopConfirm: React.FC<Props> = ({
  node,
  onHide,
  placement = 'right',
  position = { x: 0, y: 0 },
  show,
  text,
}) => {
  const Content: React.FC = () => (
    <div className={styles.contentContainer}>
      <Typography size="two" text={text} />
      <div className={styles.contentButtons}>
        <Button label="No" size="small" type="secondary" />
        <Button label="Yes" size="small" />
      </div>
    </div>
  );

  return (
    <PopOver
      Content={<Content />}
      caretPosition="bottom-center"
      node={node}
      onHide={onHide}
      placement={placement}
      position={position}
      show={show}
    />
  );
};

export default PopConfirm;
