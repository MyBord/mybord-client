import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import RenderText from './renderText';

interface Props {
  Content?: TypographyProps['Content'];
  isParagraph: boolean;
  lineHeight: TypographyProps['lineHeight'];
  maxTextLength?: TypographyProps['maxTextLength'];
  size: TypographyProps['size'];
  text: TypographyProps['text'];
}

const TypographyText: React.FC<Props> = ({
  Content,
  lineHeight,
  isParagraph,
  maxTextLength,
  size,
  text,
}) => (
  <>
    {Content && <Content />}
    <RenderText
      isParagraph={isParagraph}
      lineHeight={lineHeight}
      maxTextLength={maxTextLength}
      size={size}
      text={text}
    />
  </>
);

export default TypographyText;
