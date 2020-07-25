import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import getTextWithAnchors, { TextWithAnchors } from './getTextWithAnchors';

interface Props {
  isParagraph: boolean;
  text: TypographyProps['text'];
}

const FinalText: React.FC<Props> = ({
  isParagraph,
  text,
}) => {
  let textWithAnchorsArray: TextWithAnchors = [];
  if (isParagraph) {
    textWithAnchorsArray = getTextWithAnchors(text);
  }

  const textWithAnchors = (): React.ReactElement[] => textWithAnchorsArray.map((anchor, index) => {
    if (anchor.link) {
      return (
        <a
          key={`${anchor.label}-${index}`}
          href={anchor.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {anchor.label}
        </a>
      );
    }

    return <React.Fragment key={`${anchor.label}-${index}`}>{anchor.label}</React.Fragment>;
  });

  if (textWithAnchorsArray.length > 0) {
    return (
      <>
        {textWithAnchors()}
      </>
    );
  }

  return <>{text}</>;
};

export default FinalText;
