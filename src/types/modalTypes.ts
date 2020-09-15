import * as React from 'react';
import { CardData } from 'schema/card';
import { YoutubeVideoData } from 'types/youtubeTypes';

export interface AddCardModalProps {
  formData: {
    cardData: CardData;
    category: string;
    title: string;
    url: string;
    youtubeCardData: YoutubeVideoData;
  };
}

export interface ModalProps {
  children: React.ReactNode;
  defaultVisible?: boolean;
  id: string;
  title: string;
}

export interface PopOverCallback {
  hidePopOver: () => void;
  isVisible: boolean;
  showPopOver: () => void;
}

export interface PopOverProps {
  callback?: (props: PopOverCallback) => void;
  caretPlacement?:
  'auto'
  | 'bottom'
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
  position?: {
    left?: number;
    top?: number;
  };
  trigger?: 'click' | 'hover';
}

export interface PopOverCaretStyle {
  right?: string;
}

export interface PopOverStyle {
  left?: string;
  right?: string;
  top: string;
}
