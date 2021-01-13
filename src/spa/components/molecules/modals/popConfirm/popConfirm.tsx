import * as React from 'react';
import PopOver from 'popOver/popOver';
import { PopOverCallback, PopOverProps } from 'types/modalTypes';
import PopConfirmContent from './popConfirmContent';

interface Props {
  children: PopOverProps['children'];
  text: string;
}

const PopConfirm: React.FC<Props> = ({
  children,
  text,
}) => {
  const [hidePopOver, setHidePopOver] = React.useState<PopOverCallback['hidePopOver']>(null);

  const handleCallback = (props: PopOverCallback): void => {
    if (!hidePopOver) {
      setHidePopOver(props.hidePopOver);
    }
  };

  return (
    <PopOver
      Content={<PopConfirmContent onHide={hidePopOver} text={text} />}
      callback={handleCallback}
      caretPlacement="center"
      placement="bottom-center"
    >
      {children}
    </PopOver>
  );
};

export default PopConfirm;
