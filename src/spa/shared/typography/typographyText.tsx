import * as React from 'react';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconNameTypes';
import { TypographyColor, TypographySize } from 'types/typographyTypes';

interface Props {
  color?: TypographyColor;
  iconName?: IconNames;
  maxTextLength?: number;
  size?: TypographySize;
  text: string;
}

const TypographyText: React.FC<Props> = ({
  color,
  iconName,
  maxTextLength,
  size,
  text,
}) => {
  const renderText = (): string => {
    if (maxTextLength && text.length > maxTextLength) {
      return (
        `${text.slice(0, maxTextLength)}...`
      );
    }
    return text;
  };

  const getIconSize = (): number => {
    switch (size) {
      case 'one':
        return 24;
      case 'two':
        return 24;
      case 'three':
        return 18;
      case 'four':
        return 24;
      case 'five':
        return 24;
      case 'normal':
        return 24;
      default:
        throw Error('incorrect size');
    }
  };

  return (
    <>
      {iconName && <Icon color={color} iconName={iconName} size={getIconSize()} />}
      {renderText()}
    </>
  );
};

export default TypographyText;
