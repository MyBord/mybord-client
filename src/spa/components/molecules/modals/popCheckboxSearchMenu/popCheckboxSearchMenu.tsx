import * as React from 'react';
import PopOver from 'popOver/popOver';
import { PopOverProps } from 'types/modalTypes';
import PopCheckboxSearchMenuContent from './popCheckboxSearchMenuContent';

interface Props {
  children: PopOverProps['children'];
  options: {
    label: string;
  }[];
}

const PopCheckboxSearchMenu: React.FC<Props> = ({
  children,
  options,
}) => (
  <PopOver
    Content={<PopCheckboxSearchMenuContent options={options} />}
    caretPlacement="center"
    placement="right-center"
  >
    {children}
  </PopOver>
);

export default PopCheckboxSearchMenu;
