import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import TypographyParent from './typographyParent';
import TypographyText from './typographyText/typographyText';

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(({
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
}, ref) => (
  <div ref={ref}>
    <TypographyParent
      color={color}
      font={font}
      link={link}
      onClick={onClick}
      size={size}
      textAlign={textAlign}
      weight={weight}
    >
      <TypographyText
        Content={Content}
        isParagraph={!link && !onClick}
        maxTextLength={maxTextLength}
        size={size}
        text={text}
      />
    </TypographyParent>
  </div>
));

export default Typography;
