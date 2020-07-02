import * as React from 'react';

export interface PopOverProps {
  caretPosition?:
  'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';
  children: React.ReactNode;
  defaultVisible?: boolean;
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
}

export interface PopOverStyle {
  bottom?: string;
  left?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  right?: string;
  top?: string;
  transform?: string;
}
