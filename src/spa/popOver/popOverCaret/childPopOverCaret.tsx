// Can't think of a better name for this component ¯\_(ツ)_/¯

import * as React from 'react';
import { PopOverCaretStyle } from 'types/modalTypes';

interface Props {
  childrenRectRight: number;
  divClassName: string;
  isAuto: boolean;
  popOverRectRight: number;
}

const ChildPopOverCaret: React.FC<Props> = ({
  childrenRectRight,
  divClassName,
  isAuto,
  popOverRectRight,
}) => {
  const [popOverCaretStyle, setPopOverCaretStyle] = React.useState<PopOverCaretStyle>(null);

  React.useEffect(() => {
    const getCaretStyle = (): void => {
      if (isAuto) {
        const caretRight = `${popOverRectRight - childrenRectRight}px`;
        setPopOverCaretStyle({ right: caretRight });
      }
    };

    getCaretStyle();

    window.addEventListener('resize', getCaretStyle);

    return () => {
      window.removeEventListener('resize', getCaretStyle);
    };
  }, [childrenRectRight, isAuto, popOverRectRight]);

  return (
    <div
      className={divClassName}
      style={popOverCaretStyle}
    />
  );
};

export default ChildPopOverCaret;
