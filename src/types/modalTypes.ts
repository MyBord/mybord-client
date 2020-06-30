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
  placement?: 'left' | 'right';
  position?: {
    x: number;
    y: number;
  };
}
