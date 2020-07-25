import * as React from 'react';
import { TypographySize } from 'types/typographyTypes';
import RenderText from './renderText';

interface Props {
  Content?: React.FC;
  isParagraph: boolean;
  maxTextLength?: number;
  size: TypographySize;
  text: string;
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
