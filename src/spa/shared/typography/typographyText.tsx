import * as React from 'react';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconNameTypes';
import { TypographyColor, TypographySize } from 'types/typographyTypes';
import * as styles from './typography.module.less';

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
      case 'large':
        return 24;
      case 'medium':
        return 24;
      case 'normal':
        return 24;
      case 'small':
        return 24;
      case 'xl':
        return 36;
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
