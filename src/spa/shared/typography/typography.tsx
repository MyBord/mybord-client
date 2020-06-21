import * as React from 'react';
import { ExportedColors } from 'types/colorTypes';
import {
  TypographyFont,
  TypographySize,
  TypographyWeight,
} from 'types/typographyTypes';
import TypographyButton from './typographyButton';
import TypographyLink from './typographyLink';
import TypographyParagraph from './typographyParagraph';
import TypographyText from './typographyText';

interface Props {
  Content?: React.FC;
  color?: ExportedColors;
  font?: TypographyFont;
  link?: string;
  maxTextLength?: number;
  onClick?: () => void;
  showExpandCollapseButton?: boolean;
  size?: TypographySize;
  text: string;
  weight?: TypographyWeight;
}

const Typography = React.forwardRef<HTMLDivElement, Props>(({
  Content = null,
  color = 'black',
  font = 'poppins',
  link = null,
  maxTextLength = null,
  onClick = null,
  size = 'normal',
  text,
  weight = 'regular',
}, ref) => {
  const Component: React.FC<{children: React.ReactNode}> = ({ children }) => {
    if (link) {
      return (
        <TypographyLink
          font={font}
          link={link}
          size={size}
          weight={weight}
        >
          {children}
        </TypographyLink>
      );
    }

    if (onClick) {
      return (
        <TypographyButton
          font={font}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </TypographyButton>
      );
    }

    return (
      <TypographyParagraph
        color={color}
        font={font}
        size={size}
        weight={weight}
      >
        {children}
      </TypographyParagraph>
    );
  };

  return (
    <div ref={ref}>
      <Component>
        <TypographyText
          Content={Content}
          maxTextLength={maxTextLength}
          text={text}
        />
      </Component>
    </div>
  );
});

export default Typography;
