import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import RenderText from './renderText';

interface Props {
  Content?: TypographyProps['Content'];
  isParagraph: boolean;
  maxTextLength?: TypographyProps['maxTextLength'];
  size: TypographyProps['size'];
  text: TypographyProps['text'];
}

const TypographyText: React.FC<Props> = ({
  Content,
  isParagraph,
  maxTextLength,
  size,
  text,
}) => (
  <>
    {Content && <Content />}
    <RenderText
      isParagraph={isParagraph}
      maxTextLength={maxTextLength}
      size={size}
      text={text}
    />
  </>
);

export default TypographyText;
