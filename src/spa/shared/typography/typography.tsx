import * as React from 'react';
import { ExportedColors } from 'types/colorTypes';
import {
  TypographyFont,
  TypographySize,
  TypographyTextAlign,
  TypographyWeight,
} from 'types/typographyTypes';
import TypographyButton from './typographyButton/typographyButton';
import TypographyLink from './typographyLink/typographyLink';
import TypographyParagraph from './typographyParagraph/typographyParagraph';
import TypographyText from './typographyText/typographyText';

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
  textAlign?: TypographyTextAlign;
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
  textAlign = null,
  weight = 'regular',
}, ref) => {
  const Component: React.FC<{children: React.ReactNode}> = ({ children }) => {
    if (link) {
      return (
        <TypographyLink
          font={font}
          link={link}
          onClick={onClick}
          size={size}
          textAlign={textAlign}
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
          textAlign={textAlign}
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
        textAlign={textAlign}
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
          isParagraph={!link && !onClick}
          maxTextLength={maxTextLength}
          size={size}
          text={text}
        />
      </Component>
    </div>
  );
});

export default Typography;
