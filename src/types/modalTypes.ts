import * as React from 'react';

export interface PopOverProps {
  caretPlacement?:
  'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top';
  children: React.ReactElement;
  color?: 'blue' | 'white';
  defaultVisible?: boolean;
  delay?: number;
  placement?:
  'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-bottom'
  | 'left-center'
  | 'left-top'
  | 'right-bottom'
  | 'right-center'
  | 'right-top'
  | 'top-center'
  | 'top-left'
  | 'top-right';
  trigger?: 'click' | 'hover';
}

export interface PopOverStyle {
  left?: string;
  top?: string;
}
