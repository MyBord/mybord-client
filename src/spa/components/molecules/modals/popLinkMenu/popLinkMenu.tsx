import * as React from 'react';
import PopOver from 'popOver/popOver';
import { PopOverProps } from 'types/modalTypes';
import PopLinkMenuContent from './popLinkMenuContent';

interface Props {
  children: PopOverProps['children'];
  options: {
    label: string;
    link: string;
  }[];
}

const PopLinkMenu: React.FC<Props> = ({
  children,
  options,
}) => (
  <PopOver
    Content={<PopLinkMenuContent options={options} />}
    caretPlacement="center"
    placement="right-bottom"
  >
    {children}
  </PopOver>
);

export default PopLinkMenu;
