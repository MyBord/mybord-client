import * as React from 'react';
import { ExportedColors } from 'types/colorTypes';

type TypographyFont = 'poppins' | 'roboto';

type TypographySize =
  'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'normal';

type TypographyTextAlign = 'center' | 'justify' | 'left' | 'right';

type TypographyWeight = 'bold' | 'light' | 'regular';

export interface TypographyProps {
  Content?: React.FC;
  color?: ExportedColors;
  disabled?: boolean;
  font?: TypographyFont;
  isPageTitle?: boolean;
  lineHeight?: 'large';
  link?: string;
  maxTextLength?: number;
  onClick?: () => void;
  showExpandCollapseButton?: boolean;
  size?: TypographySize;
  text: string;
  textAlign?: TypographyTextAlign;
  weight?: TypographyWeight;
}
